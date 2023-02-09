import type { Container } from "../../renderer/Container";
import type { AnimatedProp, AnimatedProps } from "../../renderer/processors";
import type { Node } from "../../dom/types";

import { startMapper, stopMapper, isSharedValue } from "./moduleWrapper";

const _bindings = new WeakMap<Node<unknown>, unknown>();

export function sanitizeReanimatedProps(props: AnimatedProps<any>) {
  const reanimatedProps = {} as AnimatedProps<any>;
  const otherProps = {} as AnimatedProps<any>;
  for (let propName in props) {
    const propValue = props[propName];
    if (isSharedValue(propValue)) {
      reanimatedProps[propName] = propValue;
      otherProps[propName] = propValue.value;
    } else {
      otherProps[propName] = propValue;
    }
  }
  return [otherProps, reanimatedProps];
}

export function bindReanimatedProps(
  container: Container,
  node: Node<any>,
  reanimatedProps: AnimatedProps<any>
) {
  const sharedValues = Object.values(reanimatedProps);
  const previousMapperId = _bindings.get(node);
  if (previousMapperId !== undefined) {
    stopMapper(previousMapperId);
  }
  if (sharedValues.length > 0) {
    const viewId = container.getNativeId();
    const SkiaViewApi = global.SkiaViewApi;
    const mapperId = startMapper(() => {
      "worklet";
      for (let propName in reanimatedProps) {
        node && node.setProp(propName, reanimatedProps[propName].value);
      }
      SkiaViewApi && SkiaViewApi.requestRedraw(viewId);
    }, sharedValues);
    _bindings.set(node, mapperId);
  }
}

export function sanitizeReanimatedProp(value: AnimatedProp<any>) {
  return value.value;
}