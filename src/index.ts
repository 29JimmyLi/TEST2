import { 
  createSession,
  createViewport, 
  BUSY_MODE_DISPLAY, 
  FLAG_TYPE, 
  SPINNER_POSITIONING, 
  VISIBILITY_MODE 
} from "@shapediver/viewer";

// we put all of our code here in an IIFE to allow the "await" statement of promises
(async () => {

  // we read out the canvas element of the index.html file
  const canvasElement = document.getElementById("canvas") as HTMLCanvasElement;

  // we create a viewport with the canvas element we just read out
  // additionally we adjust some optional properties to change the style of the viewport
  const viewport = await createViewport({
    canvas: canvasElement,
    visibility: VISIBILITY_MODE.MANUAL,
    branding: {
      logo: "https://viewer.shapediver.com/v3/youtube/video1/catAstronaut.png",
      backgroundColor: "#008800",
      spinnerPositioning: SPINNER_POSITIONING.BOTTOM_LEFT,
      busyModeSpinner: "https://viewer.shapediver.com/v3/youtube/video1/subscribe.gif",
      busyModeDisplay: BUSY_MODE_DISPLAY.SPINNER
    },
    id: "YouTubeViewport1"
  })

  // we create a session with the ticket and modelViewUrl of a model on the ShapeDiver platform
  // we additionally adjust some optional properties
  const session = await createSession({
    ticket: "c73864f0b68200ec80e629757971ab3a0fde176e4b5e12117e4bcd4b545dd6f35944b5f77e033138eeec6c08d7f602c3708bb92980892a4209c51a73bd43e35479d0fc3e46244169eaf6596d1e32010a154951c8a1a7a5199d1f00602c47d9c3a14c6879f75631-a58f6d2ff1fe947533a74f0c291d57e3",
    modelViewUrl: "https://sdeuc1.eu-central-1.shapediver.com",
    initialParameterValues: {
      "de76cade-0cea-47b1-879e-1a0b717910e1": "2"
    },
    id: "YouTubeSession1"
  })

  // once everything is set up, we show the viewport (when setting the visibility of the viewport to SESSION, this call is not needed)
  viewport.show = true;

  // we add a flag to always show the busy mode
  // this is just done to show the gif
  viewport.addFlag(FLAG_TYPE.BUSY_MODE)
})();

