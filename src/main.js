import { klein } from 'three/examples/jsm/Addons.js'
import './style.css'
import * as THREE from 'three'
import { addDefaultMeshes, addStandardMeshes } from './addDefaultMeshes.js'
import { addLights } from './addLights.js'
import Model from './model.js'
import { add, instance } from 'three/tsl'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { InteractionManager } from 'three.interactive'
import gsap from 'gsap'
import { postprocessing } from './postprocessings.js'
import { environment } from './environment.js'

let modelFlag = false
let composer
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

/* ------------------------------ VIDEO TEXTURE ----------------------------- */
const video = document.getElementById('video');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');

const videoSources = {
  video: 'Bearghain_Video.mp4',
  video2: 'Tunnel.mp4',
  video3: 'Chapinero_Alto.mp4',
  video4: 'Rosales.mp4',
}

const overlayVideoSources = {
  'overlay-Rosales': 'Rosales.mp4',
  'overlay-Tunnel': 'Tunnel.mp4',
  'overlay-Bearghain': 'Bearghain_Video.mp4',
  'overlay-Chapinero_Alto': 'Chapinero_Alto.mp4',
}

Object.entries(videoSources).forEach(([id, src]) => {
  const videoElement = document.getElementById(id)
  if (!videoElement) return
  videoElement.src = assetUrl(src)
  videoElement.load()
})

Object.entries(overlayVideoSources).forEach(([overlayId, src]) => {
  const overlay = document.getElementById(overlayId)
  const overlayVideo = overlay?.querySelector('video')
  if (!overlayVideo) return
  overlayVideo.src = assetUrl(src)
  overlayVideo.load()
})

const videoTexture = new THREE.VideoTexture(video);
const videoTexture2 = new THREE.VideoTexture(video2);
const videoTexture3 = new THREE.VideoTexture(video3);
const videoTexture4 = new THREE.VideoTexture(video4);
videoTexture.colorSpace = THREE.SRGBColorSpace;
videoTexture2.colorSpace = THREE.SRGBColorSpace;
videoTexture3.colorSpace = THREE.SRGBColorSpace;
videoTexture4.colorSpace = THREE.SRGBColorSpace;

/* -------------------------------------------------------------------------- */
/*                               GARDEN OBJECTS                               */
/* -------------------------------------------------------------------------- */

const gardenObjects = [
  { name: 'Butterfly', url: assetUrl('butterfly.glb'), materialType: 'packed' },
  { name: 'Column_1', url: assetUrl('Column_1.glb'), materialType: 'phong', color: 0xFEF6EC },
  { name: 'Column_2', url: assetUrl('Column_2.glb'), materialType: 'phong', color: 0xFEF6EC },
  { name: 'Glass_1', url: assetUrl('Glass_1.glb'), materialType: 'glass' },
  { name: 'Glass_2', url: assetUrl('Glass_2.glb'), materialType: 'glass' },
  { name: 'Gravel_floor_1', url: assetUrl('Gravel_floor_1.glb'), materialType: 'phong', color: 0xdad7cd },
  { name: 'Gravel_floor_2', url: assetUrl('Gravel_floor_2.glb'), materialType: 'phong', color: 0xedede9 },
  { name: 'Lamp', url: assetUrl('Lamp.glb'), materialType: 'packed' },
  { name: 'Rock_1', url: assetUrl('Rock_1.glb'), materialType: 'packed' },
  { name: 'Rock_2', url: assetUrl('Rock_2.glb'), materialType: 'packed' },
  { name: 'Roof', url: assetUrl('Roof.glb'), materialType: 'phong', color: 0xF9E5DC },
  { name: 'Shrubs_Group_1A', url: assetUrl('Shrubs.glb'), materialType: 'packed' },
  { name: 'Stepping_stones_1', url: assetUrl('Stepping_stones_1.glb'), materialType: 'packed' },
  { name: 'Stepping_stones_2', url: assetUrl('Stepping_stones_2.glb'), materialType: 'packed' },
  { name: 'Stepping_stones_3', url: assetUrl('Stepping_stones_3.glb'), materialType: 'packed' },
  { name: 'Stepping_stones_4', url: assetUrl('Stepping_stones_4.glb'), materialType: 'packed' },
  { name: 'Stepping_stones_5', url: assetUrl('Stepping_stones_5.glb'), materialType: 'packed' },
  { name: 'Stepping_stones_6', url: assetUrl('Stepping_stones_6.glb'), materialType: 'packed' },
  { name: 'Three_front', url: assetUrl('Three_front.glb'), materialType: 'packed' },
  { name: 'Tree_back', url: assetUrl('Tree_back.glb'), materialType: 'packed' },
  { name: 'Tsukubai', url: assetUrl('Tsukubai.glb'), materialType: 'packed' },
  { name: 'Vertical_rock_1', url: assetUrl('Vertical_rock_1.glb'), materialType: 'packed' },
  { name: 'Vertical_rock_2', url: assetUrl('Vertical_rock_2.glb'), materialType: 'packed' },
  { name: 'Wall_1', url: assetUrl('Wall_1.glb'), materialType: 'phong', color: 0xFEF6EC },
  { name: 'Wall_2', url: assetUrl('Wall_2.glb'), materialType: 'phong', color: 0xFEF6EC },
  { name: 'Wall_3', url: assetUrl('Wall_3.glb'), materialType: 'phong', color: 0xFEF6EC },
  { name: 'Wall_4', url: assetUrl('Wall_4.glb'), materialType: 'phong', color: 0xFEF6EC },
  { name: 'Wall_5', url: assetUrl('Wall_5.glb'), materialType: 'phong', color: 0xFEF6EC },
  { name: 'Window_1', url: assetUrl('Window_1.glb'), materialType: 'phong', color: 0xF9E5DC },
  { name: 'Wooden_beam', url: assetUrl('Wooden_beam.glb'), materialType: 'phong', color: 0xF9E5DC },
  { name: 'Wooden_floor', url: assetUrl('Wooden_floor.glb'), materialType: 'phong', color: 0xF9E5DC },
  { name: 'Wooden_gate', url: assetUrl('Wooden_gate.glb'), materialType: 'phong', color: 0xF9E5DC },
];

// Map of interactive objects with video textures and overlay IDs
const interactiveMap = {
  'Tsukubai': { texture: videoTexture4, video: video4, overlayId: 'overlay-Rosales' },
  'Lamp': { texture: videoTexture3, video: video3, overlayId: 'overlay-Chapinero_Alto' },
  'Vertical_rock_2': { texture: videoTexture, video: video, overlayId: 'overlay-Bearghain' },
  'Stepping_stones_1': { texture: videoTexture2, video: video2, overlayId: 'overlay-Tunnel' },
}

const initializedInteractions = new Set()

const scene = new THREE.Scene()

/* --------------------------------- CAMERA --------------------------------- */

// (FOV, aspect ratio, near clipping plane, far clipping plane)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
  antialias: true
})

// Variable that holds the location and rotation of the camera, and the point it is looking at
const cameraPosition = new THREE.Vector3(0, 0, 5)
const cameraTarget = new THREE.Vector3(0, 0, 0)
camera.position.copy(cameraPosition)
camera.lookAt(cameraTarget)

const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement,
)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.8
controls.minPolarAngle = Math.PI / 2.4
controls.maxPolarAngle = Math.PI / 2
controls.minAzimuthAngle = -Math.PI / 20
controls.maxAzimuthAngle = Math.PI / 10
controls.minDistance = 4
controls.maxDistance = 7

const meshes = {}
const mixers = []
let activeLights = []
let sceneMode = 'day'
const clock = new THREE.Clock()

init()

function init() {
  // we do all of our setup here
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  composer = postprocessing(scene, camera, renderer)

  applySceneMode('day')

  console.log(meshes)

  instances()
  resize()
  animate()
}
  // Function to apply the scene mode, be that day or night
function applySceneMode(mode) {
  sceneMode = mode

  // remove previous mode lights before adding the other scene lights
  activeLights.forEach((light) => scene.remove(light))
  activeLights = addLights(scene, mode)

  const hdrFile = mode === 'night' ? 'nightsky.hdr' : 'Sky.hdr'
  const envMap = environment(assetUrl(hdrFile))
  scene.background = envMap
  scene.environment = envMap
}

function instances() {
  gardenObjects.forEach((obj) => {
    const model = new Model({
      name: obj.name,
      url: obj.url,
      scene: scene,
      meshes: meshes,
      scale: new THREE.Vector3(1, 1, 1),
      position: new THREE.Vector3(0, 0, 0),
      materialType: obj.materialType || 'matcap',
      color: obj.color || 0xffffff,
      animationState: true,
      mixers: mixers,
      callback: () => {
        interactions()
      },
      // replace: true
    })
    model.init()
  })
}

/* -------------------------------------------------------------------------- */
/*                CONTROLS FOR INSIDE AND OUTSIDE CAMERA VIEWS                */
/* -------------------------------------------------------------------------- */

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'i': // Inside camera
      camera.position.set(3, 0, -0.9);
      controls.target.set(0, 0, -0.9);
      controls.minAzimuthAngle = Math.PI / 4
      controls.maxAzimuthAngle = (Math.PI * 3) / 4;
      controls.minDistance = 2
      controls.maxDistance = 4
      break;
  }
});

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'o': // Outside camera
      camera.position.copy(cameraPosition)
      camera.lookAt(cameraTarget)
      controls.minAzimuthAngle = -Math.PI / 20
      controls.maxAzimuthAngle = Math.PI / 10
      controls.minPolarAngle = Math.PI / 2.4
      controls.maxPolarAngle = Math.PI / 2
      controls.minDistance = 4
      controls.maxDistance = 7
      break;
  }
});
/* -------------------------------------------------------------------------- */
/*              EVENT LISTENERS FOR DAY AND NIGHT MODE SWITCHING              */
/* -------------------------------------------------------------------------- */
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'n': // Night mode
      if (sceneMode !== 'night') {
        applySceneMode('night')
      }
      break;
    case 'd': // Day mode
      if (sceneMode !== 'day') {
        applySceneMode('day')
      }
      break;
  }
});

function resize() {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate() {
  const delta = clock.getDelta()
  for (const mixer of mixers) {
    mixer.update(delta)
  }
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  // composer.render()
  controls.update()
  interactionManager.update()
}

/* -------------------------------------------------------------------------- */
/*    Function for interactions with the garden objects: video texture, scale and position   */
/* -------------------------------------------------------------------------- */

function interactions() {
  Object.entries(interactiveMap).forEach(([name, { texture, video: vid, overlayId }]) => {
    if (initializedInteractions.has(name)) {
      return;
    }

    const target = meshes[name];
    if (!target) {
      return;
    }

    let videoSwapTimeout = null;
    let isRevealed = false;
    // Capture the initial position
    const initialY = target.position.y;

    // Get the overlay and its video element
    const overlay = document.getElementById(overlayId);
    const overlayVideo = overlay?.querySelector('video');

    if (!overlay || !overlayVideo) {
      console.warn(`Overlay ${overlayId} not found for ${name}.`);
      return;
    }

    // Close on background click (outside the video)
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        overlay.classList.remove('active');
        overlayVideo.pause();
        overlayVideo.currentTime = 0;
      }
    });

    target.addEventListener('mouseover', (event) => {
      gsap.to(target.scale, {
        x: 1.1, y: 1.1, z: 1.1,
        duration: 0.75,
        ease: 'bounce',
      });

      gsap.to(target.position, {
        y: initialY + 0.2,
        duration: 0.75,
        ease: 'bounce',
      });

      // Video Swap

      target.traverse((child) => {
        if (child.isMesh) {
          if (!child.userData.originalMap) {
            child.userData.originalMap = child.material.map;
          }
        }
      });

      videoSwapTimeout = setTimeout(() => {
        target.traverse((child) => {
          if (child.isMesh) {
            child.material.map = texture;
            child.material.needsUpdate = true;
          }
        });
        vid.play();
        isRevealed = true;
      }, 2000);
    });

    target.addEventListener('mouseout', () => {
      clearTimeout(videoSwapTimeout);
      videoSwapTimeout = null;
      isRevealed = false;

      gsap.to(target.scale, {
        x: 1, y: 1, z: 1,
        duration: 0.75,
        ease: 'bounce',
      });

      gsap.to(target.position, {
        y: initialY,
        duration: 0.75,
        ease: 'bounce',
      });

      vid.pause();
      vid.currentTime = 0;

      // Return to Original Texture
      target.traverse((child) => {
        if (child.isMesh && child.userData.originalMap !== undefined) {
          child.material.map = child.userData.originalMap;
          child.material.needsUpdate = true;
        }
      });
    });

    // Click only works after isRevealed is true
    target.addEventListener('click', () => {
      if (!isRevealed) return;
      overlay.classList.add('active');
      overlayVideo.play();
    });

    interactionManager.add(target);
    initializedInteractions.add(name)
  });

  modelFlag = initializedInteractions.size === Object.keys(interactiveMap).length
}

