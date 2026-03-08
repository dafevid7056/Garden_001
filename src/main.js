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

/* ------------------------------ VIDEO TEXTURE ----------------------------- */
const video = document.getElementById('video');
const videoTexture = new THREE.VideoTexture(video);
videoTexture.colorSpace = THREE.SRGBColorSpace;

/* -------------------------------------------------------------------------- */
/*                               GARDEN OBJECTS                               */
/* -------------------------------------------------------------------------- */

const gardenObjects = [
  { name: 'Butterfly', url: './butterfly.glb', materialType: 'packed' },
  { name: 'Column_1', url: './Column_1.glb', materialType: 'phong', color: 0xFEF6EC },
  { name: 'Column_2', url: './Column_2.glb', materialType: 'phong', color: 0xFEF6EC },
  { name: 'Glass_1', url: './Glass_1.glb', materialType: 'glass' },
  { name: 'Glass_2', url: './Glass_2.glb', materialType: 'glass' },
  { name: 'Gravel_floor_1', url: './Gravel_floor_1.glb', materialType: 'phong', color: 0xdad7cd },
  { name: 'Gravel_floor_2', url: './Gravel_floor_2.glb', materialType: 'phong', color: 0xedede9 },
  { name: 'Lamp', url: './Lamp.glb', materialType: 'packed' },
  { name: 'Rock_1', url: './Rock_1.glb', materialType: 'packed' },
  { name: 'Rock_2', url: './Rock_2.glb', materialType: 'packed' },
  { name: 'Roof', url: './Roof.glb', materialType: 'phong', color: 0xF9E5DC },
  { name: 'Shrubs_Group_1A', url: './Shrubs.glb', materialType: 'packed' },
  { name: 'Stepping_stones_1', url: './Stepping_stones_1.glb', materialType: 'packed' },
  { name: 'Stepping_stones_2', url: './Stepping_stones_2.glb', materialType: 'packed' },
  { name: 'Stepping_stones_3', url: './Stepping_stones_3.glb', materialType: 'packed' },
  { name: 'Stepping_stones_4', url: './Stepping_stones_4.glb', materialType: 'packed' },
  { name: 'Stepping_stones_5', url: './Stepping_stones_5.glb', materialType: 'packed' },
  { name: 'Stepping_stones_6', url: './Stepping_stones_6.glb', materialType: 'packed' },
  { name: 'Three_front', url: './Three_front.glb', materialType: 'packed' },
  { name: 'Tree_back', url: './Tree_back.glb', materialType: 'packed' },
  { name: 'Tsukubai', url: './Tsukubai.glb', materialType: 'packed' },
  { name: 'Vertical_rock_1', url: './Vertical_rock_1.glb', materialType: 'packed' },
  { name: 'Vertical_rock_2', url: './Vertical_rock_2.glb', materialType: 'packed' },
  { name: 'Wall_1', url: './Wall_1.glb', materialType: 'phong', color: 0xFEF6EC },
  { name: 'Wall_2', url: './Wall_2.glb', materialType: 'phong', color: 0xFEF6EC },
  { name: 'Wall_3', url: './Wall_3.glb', materialType: 'phong', color: 0xFEF6EC },
  { name: 'Wall_4', url: './Wall_4.glb', materialType: 'phong', color: 0xFEF6EC },
  { name: 'Wall_5', url: './Wall_5.glb', materialType: 'phong', color: 0xFEF6EC },
  { name: 'Window_1', url: './Window_1.glb', materialType: 'phong', color: 0xF9E5DC },
  { name: 'Wooden_beam', url: './Wooden_beam.glb', materialType: 'phong', color: 0xF9E5DC },
  { name: 'Wooden_floor', url: './Wooden_floor.glb', materialType: 'phong', color: 0xF9E5DC },
  { name: 'Wooden_gate', url: './Wooden_gate.glb', materialType: 'phong', color: 0xF9E5DC },
];

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
controls.minPolarAngle = Math.PI / 2.8
controls.maxPolarAngle = Math.PI / 2
controls.minAzimuthAngle = -Math.PI / 18
controls.maxAzimuthAngle = Math.PI / 10
controls.minDistance = 4
controls.maxDistance = 7

const meshes = {}
const mixers = []
// const lights = {}
const clock = new THREE.Clock()

init()

function init() {
  // we do all of our setup here
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  composer = postprocessing(scene, camera, renderer)

  // lights.default = addLights()
  // scene.add(lights.default)

  addLights(scene)

  console.log(meshes)

  scene.background = environment()
  scene.environment = environment()
  scene.environment.intensity = 2.0

  instances()
  resize()
  animate()
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
      // replace: true
    })
    model.init()
  })
}

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
      controls.minAzimuthAngle = -Math.PI / 18
      controls.maxAzimuthAngle = Math.PI / 10
      controls.minPolarAngle = Math.PI / 2.8
      controls.maxPolarAngle = Math.PI / 2
      controls.minDistance = 4
      controls.maxDistance = 7
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

  if (!modelFlag && meshes.Tsukubai) {
    interactions()
    modelFlag = true
  }
}

/* -------------------------------------------------------------------------- */
/*    Function for interactions with the garden objects: video texture, scale and position   */
/* -------------------------------------------------------------------------- */

function interactions() {
  const interactiveNames = ['Tsukubai', 'Stepping_stones_1', 'Vertical_rock_2', 'Lamp'];

  interactiveNames.forEach((name) => {
    const target = meshes[name];

    // Check if the object exists in the meshes object
    if (!target) {
      console.warn(`Mesh ${name} not found yet.`);
      return;
    }

    // Capture the initial position
    const initialY = target.position.y;

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

      // Video Swap Logic
      target.traverse((child) => {
        if (child.isMesh) {
          // Store original texture once
          if (!child.userData.originalMap) {
            child.userData.originalMap = child.material.map;
          }
          child.material.map = videoTexture;
          child.material.needsUpdate = true;
        }
      });

      video.play();
    });

    target.addEventListener('mouseout', () => {
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

      // Return to Original Texture
      target.traverse((child) => {
        if (child.isMesh && child.userData.originalMap !== undefined) {
          child.material.map = child.userData.originalMap;
          child.material.needsUpdate = true;
        }
      });
    });
    interactionManager.add(target);
  });
}

