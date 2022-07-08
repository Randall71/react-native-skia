"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8180],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return k}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(t),k=s,v=d["".concat(l,".").concat(k)]||d[k]||m[k]||r;return t?n.createElement(v,p(p({ref:a},c),{},{components:t})):n.createElement(v,p({ref:a},c))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,p[1]=o;for(var i=2;i<r;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1084:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return m}});var n=t(3117),s=t(102),r=(t(7294),t(3905)),p=["components"],o={id:"canvas",title:"Canvas",sidebar_label:"Overview",slug:"/canvas/overview"},l=void 0,i={unversionedId:"canvas/canvas",id:"canvas/canvas",title:"Canvas",description:"The Canvas component is the root of your Skia drawing.",source:"@site/docs/canvas/canvas.md",sourceDirName:"canvas",slug:"/canvas/overview",permalink:"/react-native-skia/docs/canvas/overview",editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/canvas/canvas.md",tags:[],version:"current",frontMatter:{id:"canvas",title:"Canvas",sidebar_label:"Overview",slug:"/canvas/overview"},sidebar:"tutorialSidebar",previous:{title:"Hello World",permalink:"/react-native-skia/docs/getting-started/hello-world"},next:{title:"Contexts",permalink:"/react-native-skia/docs/canvas/contexts"}},c={},m=[{value:"Getting the Canvas size",id:"getting-the-canvas-size",level:2},{value:"Getting a Canvas Snapshot",id:"getting-a-canvas-snapshot",level:2},{value:"Example",id:"example",level:3}],d={toc:m};function k(e){var a=e.components,t=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Canvas component is the root of your Skia drawing.\nYou can treat it as a regular React Native view and assign a view style.\nBehind the scenes, it is using its own React renderer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"style?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ViewStyle")),(0,r.kt)("td",{parentName:"tr",align:"left"},"View style")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ref?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Ref<SkiaView>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reference to the ",(0,r.kt)("inlineCode",{parentName:"td"},"SkiaView")," object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"onTouch?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TouchHandler")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Touch handler for the Canvas (see ",(0,r.kt)("a",{parentName:"td",href:"/docs/animations/touch-events#usetouchhandler"},"touch handler"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"onLayout?"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"NativeEvent<LayoutEvent>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invoked on mount and on layout changes (see ",(0,r.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/view#onlayout"},"onLayout"),")")))),(0,r.kt)("h2",{id:"getting-the-canvas-size"},"Getting the Canvas size"),(0,r.kt)("p",null,"If the size of the Canvas is unknown, there are two ways to access it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"In React components"),", using the ",(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/view#onlayout"},(0,r.kt)("inlineCode",{parentName:"a"},"onLayout"))," prop like you would on any regular React Native View. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"In Skia animations"),", using ",(0,r.kt)("a",{parentName:"li",href:"/docs/animations/values#canvas"},(0,r.kt)("inlineCode",{parentName:"a"},"useCanvas()")),".")),(0,r.kt)("h2",{id:"getting-a-canvas-snapshot"},"Getting a Canvas Snapshot"),(0,r.kt)("p",null,"You can save your drawings as an image, using ",(0,r.kt)("inlineCode",{parentName:"p"},"makeImageSnapshot"),". This method will return an ",(0,r.kt)("a",{parentName:"p",href:"/docs/images#instance-methods"},"Image instance"),". This instance can be used to draw it via the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Image>")," component, or be saved or shared using binary or base64 encoding."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList | undefined): void\nimport useEffect"},"useEffect"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"react"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useCanvasRef: () => React.RefObject<SkiaView>\nimport useCanvasRef"},"useCanvasRef")),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: {\n            x: number;\n            y: number;\n        };\n    };\n}\nimport Circle"},"Circle"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const Demo: () => JSX.Element"},"Demo")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaView>"},"ref")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useCanvasRef(): React.RefObject<SkiaView>\nimport useCanvasRef"},"useCanvasRef")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(() "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"function setTimeout<[]>(callback: () => void, ms?: number | undefined): NodeJS.Timeout (+6 overloads)\nnamespace setTimeout"},"setTimeout")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(() "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// you can pass an optional rectangle")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// to only save part of the image")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | undefined"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaView>"},"ref")),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) React.RefObject<SkiaView>.current: SkiaView | null"},"current")),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"?.",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(method) SkiaView.makeImageSnapshot(rect?: SkRect | undefined): SkImage"},"makeImageSnapshot")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"if"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | undefined"},"image"),") {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// you can use image in an <Image> component")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// Or save to file using encodeToBytes -> Uint8Array")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const bytes: Uint8Array"},"bytes")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(method) SkImage.encodeToBytes(fmt?: ImageFormat | undefined, quality?: number | undefined): Uint8Array"},"encodeToBytes")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      }")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    }"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1000"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  });")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{ ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," }} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.RefAttributes<SkiaView>.ref?: React.Ref<SkiaView> | undefined"},"ref")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.kt)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaView>"},"ref"),"}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: {\n            x: number;\n            y: number;\n        };\n    };\n}\nimport Circle"},"Circle")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) r: number"},"r")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cx: number | SkiaValue<number>"},"cx")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cy: number | SkiaValue<number>"},"cy")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"128"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) color: string"},"color")),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"red"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) function useEffect(effect: EffectCallback, deps?: DependencyList | undefined): void\nimport useEffect"},"useEffect")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"react"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Image: {\n    (props: AnimatedProps<ImageProps>): JSX.Element;\n    defaultProps: {\n        x: number;\n        y: number;\n        fit: string;\n    };\n}\nimport Image"},"Image")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const useCanvasRef: () => React.RefObject<SkiaView>\nimport useCanvasRef"},"useCanvasRef")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: {\n            x: number;\n            y: number;\n        };\n    };\n}\nimport Circle"},"Circle")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const Demo: () => JSX.Element"},"Demo")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaView>"},"ref")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useCanvasRef(): React.RefObject<SkiaView>\nimport useCanvasRef"},"useCanvasRef")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void\nimport useEffect"},"useEffect")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"function setTimeout<[]>(callback: () => void, ms?: number | undefined): NodeJS.Timeout (+6 overloads)\nnamespace setTimeout"},"setTimeout")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// you can pass an optional rectangle")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// to only save part of the image")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | undefined"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaView>"},"ref")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) React.RefObject<SkiaView>.current: SkiaView | null"},"current")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"?."),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(method) SkiaView.makeImageSnapshot(rect?: SkRect | undefined): SkImage"},"makeImageSnapshot")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"if"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage | undefined"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// you can use image in an <Image> component")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Or save to file using encodeToBytes -> Uint8Array")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const bytes: Uint8Array"},"bytes")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const image: SkImage"},"image")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(method) SkImage.encodeToBytes(fmt?: ImageFormat | undefined, quality?: number | undefined): Uint8Array"},"encodeToBytes")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1000"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: StyleProp<ViewStyle>"},"style")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(property) FlexStyle.flex?: number | undefined"},"flex")),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) React.RefAttributes<SkiaView>.ref?: React.Ref<SkiaView> | undefined"},"ref")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"const ref: React.RefObject<SkiaView>"},"ref")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const Circle: {\n    (props: AnimatedProps<CircleProps>): JSX.Element;\n    defaultProps: {\n        c: {\n            x: number;\n            y: number;\n        };\n    };\n}\nimport Circle"},"Circle")),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) r: number"},"r")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cx: number | SkiaValue<number>"},"cx")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) cy: number | SkiaValue<number>"},"cy")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,r.kt)("span",{parentName:"div",style:{color:"#B48EAD"}},"128"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(JSX attribute) color: string"},"color")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"red"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | ... 46 more ... | "onTouch"> & React.RefAttributes<...>>\nimport Canvas'},"Canvas")),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},">")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))))}k.isMDXComponent=!0}}]);