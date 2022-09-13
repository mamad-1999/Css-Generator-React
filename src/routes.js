import Backgroundcolor from "./pages/BackgroundColor/Backgroundcolor";
import Backgroundgradient from "./pages/Backgroundgradient/Backgroundgradient";
import Border from "./pages/Border/Border";
import BorderRadius from "./pages/BorderRadius/BorderRadius";
import Blur from "./pages/Filter/Blur";
import Sepia from "./pages/Filter/Sepia";
import Brightness from "./pages/Filter/Brightness";
import Contrast from "./pages/Filter/Contrast";
import Grayscale from "./pages/Filter/Grayscale";
import HeuRotate from "./pages/Filter/HeuRotate";
import Invert from "./pages/Filter/Invert";
import Saturate from "./pages/Filter/Saturate";
import Home from "./pages/Home/Home";
import DropShadow from "./pages/Filter/DropShadow";
import BoxShadow from "./pages/Box/BoxShadow";
import { Navigate } from "react-router-dom";
import Opasity from "./pages/Box/Opasity";
import FontSize from "./pages/Text/FontSize";
import Textcolor from "./pages/Text/Textcolor";
import TextDecoration from "./pages/Text/TextDecoration";
import Texttransform from "./pages/Text/Texttransform";
import LetterSpacing from "./pages/Text/LetterSpacing";
import Lineheight from "./pages/Text/Lineheight";
import Textalign from "./pages/Text/Textalign";
import FontWeight from "./pages/Text/FontWeight";
import ScaleX from "./pages/Transform/ScaleX";
import ScaleY from "./pages/Transform/ScaleY";
import TranslateX from "./pages/Transform/TranslateX";
import TranslateY from "./pages/Transform/TranslateY";
import Rotate from "./pages/Transform/Rotate";
import SkewX from "./pages/Transform/SkewX";
import SkewY from "./pages/Transform/SkewY";
import FlexBox from "./pages/FlexBox/FlexBox";

let router = [
  { path: "/", element: <Home /> },
  { path: "/backgroundcolor", element: <Backgroundcolor /> },
  { path: "/backgroundgradient", element: <Backgroundgradient /> },
  { path: "/border", element: <Border /> },
  { path: "/BorderRadius", element: <BorderRadius /> },
  { path: "/box/boxshadow", element: <BoxShadow /> },
  { path: "/box/opasity", element: <Opasity /> },
  { path: "/filter/blur", element: <Blur /> },
  { path: "/filter/sepia", element: <Sepia /> },
  { path: "/filter/brightness", element: <Brightness /> },
  { path: "/filter/contrast", element: <Contrast /> },
  { path: "/filter/grayscale", element: <Grayscale /> },
  { path: "/filter/heurotate", element: <HeuRotate /> },
  { path: "/filter/invert", element: <Invert /> },
  { path: "/filter/saturate", element: <Saturate /> },
  { path: "/filter/dropshadow", element: <DropShadow /> },
  { path: "/text/fontsize", element: <FontSize /> },
  { path: "/text/color", element: <Textcolor /> },
  { path: "/text/decoration", element: <TextDecoration /> },
  { path: "/text/transform", element: <Texttransform /> },
  { path: "/text/letterSpacing", element: <LetterSpacing /> },
  { path: "/text/lineheight", element: <Lineheight /> },
  { path: "/text/textalign", element: <Textalign /> },
  { path: "/text/fontweight", element: <FontWeight /> },
  { path: "/transform/scaleX", element: <ScaleX /> },
  { path: "/transform/scaleY", element: <ScaleY /> },
  { path: "/transform/translateX", element: <TranslateX /> },
  { path: "/transform/translateY", element: <TranslateY /> },
  { path: "/transform/rotate", element: <Rotate /> },
  { path: "/transform/skewX", element: <SkewX /> },
  { path: "/transform/skewY", element: <SkewY /> },
  { path: "/flexbox", element: <FlexBox /> },
  { path: "*", element: <Navigate to={"/"} /> },
];

export default router;
