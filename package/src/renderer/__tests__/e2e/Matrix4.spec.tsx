import React from "react";

import { checkImage } from "../../../__tests__/setup";
import { Group, Rect } from "../../components";
import { surface } from "../setup";
import {
  multiply4,
  perspective,
  processTransform3d,
  rotateX,
  translate,
  toMatrix3,
} from "../../../skia/types";

const ckPerspective = (d: number) => [
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  -1 / d,
  1,
];

const concat = (a: number[], b: number[]) => CanvasKit.M44.multiply(a, b);

describe("Matrix4", () => {
  it("should be a row major matix", () => {
    const m4 = CanvasKit.M44.identity();
    expect(processTransform3d([])).toEqual(m4);
  });
  it("should match identity matrix", () => {
    const m4 = CanvasKit.M44.identity();
    expect(
      processTransform3d([
        { translateX: 256 / 2 },
        { translateY: 256 / 2 },
        { translateX: -256 / 2 },
        { translateY: -256 / 2 },
      ])
    ).toEqual(m4);
  });
  it("Identity should match identity matrix", () => {
    const m4 = CanvasKit.M44.identity();
    expect(
      processTransform3d([
        { translateX: 256 / 2 },
        { translateY: 256 / 2 },
        { translateX: -256 / 2 },
        { translateY: -256 / 2 },
      ])
    ).toEqual(m4);
  });
  it("should match perspective matrix", () => {
    let m4 = CanvasKit.M44.identity();
    m4 = concat(m4, CanvasKit.M44.translated([256 / 2, 256 / 2, 0]));
    m4 = concat(m4, ckPerspective(300));
    m4 = concat(m4, CanvasKit.M44.translated([-256 / 2, -256 / 2, 0]));
    expect(
      processTransform3d([
        { translateX: 256 / 2 },
        { translateY: 256 / 2 },
        { perspective: 300 },
        { translateX: -256 / 2 },
        { translateY: -256 / 2 },
      ])
    ).toEqual(m4);
  });
  it("should match rotation matrix (1)", () => {
    let m4 = CanvasKit.M44.identity();
    m4 = concat(m4, CanvasKit.M44.rotated([1, 0, 0], 1));
    expect(processTransform3d([{ rotateX: 1 }])).toEqual(m4);
    m4 = CanvasKit.M44.identity();
    m4 = concat(m4, CanvasKit.M44.rotated([0, 1, 0], Math.PI));
    expect(processTransform3d([{ rotateY: Math.PI }])).toEqual(m4);
  });
  it("should match rotation matrix (2)", () => {
    let m4 = CanvasKit.M44.identity();
    m4 = concat(m4, CanvasKit.M44.translated([256 / 2, 256 / 2, 0]));
    m4 = concat(m4, CanvasKit.M44.rotated([1, 0, 0], 1));
    m4 = concat(m4, CanvasKit.M44.translated([-256 / 2, -256 / 2, 0]));
    expect(
      processTransform3d([
        { translateX: 256 / 2 },
        { translateY: 256 / 2 },
        { rotateX: 1 },
        { translateX: -256 / 2 },
        { translateY: -256 / 2 },
      ])
    ).toEqual(m4);
  });
  it("Should do a perspective transformation (1)", async () => {
    const { width, height } = surface;
    const pad = 32;
    const rct = {
      x: pad,
      y: pad,
      width: width - pad * 2,
      height: height - pad * 2,
    };
    const m3 = processTransform3d([
      { translate: [width / 2, height / 2] },
      { perspective: 300 },
      { rotateX: 1 },
      { translate: [-width / 2, -height / 2] },
    ]);
    const image = await surface.draw(
      <Group>
        <Rect rect={rct} color="magenta" />
        <Rect rect={rct} color="cyan" opacity={0.5} matrix={m3} />
      </Group>
    );
    checkImage(image, "snapshots/matrix4/perspective.png");
  });
  it("Should do a perspective transformation (2)", async () => {
    const { width, height } = surface;
    const pad = 32;
    const rct = {
      x: pad,
      y: pad,
      width: width - pad * 2,
      height: height - pad * 2,
    };
    const image = await surface.draw(
      <Group>
        <Rect rect={rct} color="magenta" />
        <Rect
          rect={rct}
          color="cyan"
          opacity={0.5}
          transform={[
            { translate: [width / 2, height / 2] },
            { perspective: 300 },
            { rotateX: 1 },
            { translate: [-width / 2, -height / 2] },
          ]}
        />
      </Group>
    );
    checkImage(image, "snapshots/matrix4/perspective.png");
  });
  it("Should do a perspective transformation (4)", async () => {
    const { width, height } = surface;
    const pad = 32;
    const rct = {
      x: pad,
      y: pad,
      width: width - pad * 2,
      height: height - pad * 2,
    };
    let matrix = translate(width / 2, height / 2);
    matrix = multiply4(matrix, perspective(300));
    matrix = multiply4(matrix, rotateX(1));
    matrix = multiply4(matrix, translate(-width / 2, -height / 2));
    const image = await surface.draw(
      <Group>
        <Rect rect={rct} color="magenta" />
        <Rect rect={rct} color="cyan" opacity={0.5} matrix={matrix} />
      </Group>
    );
    checkImage(image, "snapshots/matrix4/perspective.png");
  });
  it("Should do a perspective transformation (5)", async () => {
    const { width, height } = surface;
    const pad = 32;
    const rct = {
      x: pad,
      y: pad,
      width: width - pad * 2,
      height: height - pad * 2,
    };
    let matrix = translate(width / 2, height / 2);
    matrix = multiply4(matrix, perspective(300));
    matrix = multiply4(matrix, rotateX(1));
    matrix = multiply4(matrix, translate(-width / 2, -height / 2));
    const image = await surface.draw(
      <Group>
        <Rect rect={rct} color="magenta" />
        <Rect rect={rct} color="cyan" opacity={0.5} matrix={matrix} />
      </Group>
    );
    checkImage(image, "snapshots/matrix4/perspective.png");
  });
  it("concat() should accept 4x4 matrices (1)", async () => {
    const result = await surface.eval((Skia) => {
      const m3 = Skia.Matrix();
      return m3.get();
    });
    expect(result).toEqual([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  });
  it("concat() should accept 4x4 matrices (2)", async () => {
    const { width, height } = surface;
    let matrix = translate(width / 2, height / 2);
    matrix = multiply4(matrix, perspective(300));
    matrix = multiply4(matrix, rotateX(1));
    matrix = multiply4(matrix, translate(-width / 2, -height / 2));

    const result = await surface.eval(
      (Skia, ctx) => {
        const m3 = Skia.Matrix();
        m3.concat(ctx.matrix);
        return m3.get();
      },
      { matrix }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, jest/valid-expect
    (expect(result) as any).toBeApproximatelyEqual(
      toMatrix3(
        processTransform3d([
          { translate: [width / 2, height / 2] },
          { perspective: 300 },
          { rotateX: 1 },
          { translate: [-width / 2, -height / 2] },
        ])
      ),
      0.1
    );
  });
});
