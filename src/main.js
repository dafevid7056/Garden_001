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
  { name: 'Column_1', url: './Column_1.glb' },
  { name: 'Column_2', url: './Column_2.glb' },
  { name: 'Garden', url: './Garden.glb' },
  { name: 'Glass_1', url: './Glass_1.glb' },
  { name: 'Glass_2', url: './Glass_2.glb' },
  { name: 'Gravel_floor_1', url: './Gravel_floor_1.glb' },
  { name: 'Gravel_floor_2', url: './Gravel_floor_2.glb' },
  { name: 'Lamp', url: './Lamp.glb' },
  { name: 'Lampara', url: './Lampara.glb' },
  { name: 'Madera', url: './Madera.glb' },
  { name: 'Muros', url: './Muros.glb' },
  { name: 'Piedras', url: './Piedras.glb' },
  { name: 'Piso_Gravilla', url: './Piso_Gravilla.glb' },
  { name: 'Piso_Madera', url: './Piso_Madera.glb' },
  { name: 'Piso_Piedras', url: './Piso_Piedras.glb' },
  { name: 'Rock_1', url: './Rock_1.glb' },
  { name: 'Rock_2', url: './Rock_2.glb' },
  { name: 'Roof', url: './Roof.glb' },
  { name: 'Shrubs_Group_1A', url: './Shrubs_Group_1A.glb' },
  { name: 'Shrubs_Group_1B', url: './Shrubs_Group_1B.glb' },
  { name: 'Shrubs_Group_1C', url: './Shrubs_Group_1C.glb' },
  { name: 'Shrubs_Group_1D', url: './Shrubs_Group_1D.glb' },
  { name: 'Shrubs_Group_1E', url: './Shrubs_Group_1E.glb' },
  { name: 'Shrubs_Group_2A', url: './Shrubs_Group_2A.glb' },
  { name: 'Shrubs_Group_2B', url: './Shrubs_Group_2B.glb' },
  { name: 'Shrubs_Group_2C', url: './Shrubs_Group_2C.glb' },
  { name: 'Stepping_stones_1', url: './Stepping_stones_1.glb' },
  { name: 'Stepping_stones_2', url: './Stepping_stones_2.glb' },
  { name: 'Stepping_stones_3', url: './Stepping_stones_3.glb' },
  { name: 'Stepping_stones_4', url: './Stepping_stones_4.glb' },
  { name: 'Stepping_stones_5', url: './Stepping_stones_5.glb' },
  { name: 'Stepping_stones_6', url: './Stepping_stones_6.glb' },
  { name: 'Techo', url: './Techo.glb' },
  { name: 'Three_front', url: './Three_front.glb' },
  { name: 'Tree_back', url: './Tree_back.glb' },
  { name: 'Tsukubai', url: './Tsukubai.glb' },
  { name: 'Vegetacion', url: './Vegetacion.glb' },
  { name: 'Vertical_rock_1', url: './Vertical_rock_1.glb' },
  { name: 'Vertical_rock_2', url: './Vertical_rock_2.glb' },
  { name: 'Vertical_rock_3', url: './Vertical_rock_3.glb' },
  { name: 'Vidrio', url: './Vidrio.glb' },
  { name: 'Wall_1', url: './Wall_1.glb' },
  { name: 'Wall_2', url: './Wall_2.glb' },
  { name: 'Wall_3', url: './Wall_3.glb' },
  { name: 'Wall_4', url: './Wall_4.glb' },
  { name: 'Wall_5', url: './Wall_5.glb' },
  { name: 'Window_1', url: './Window_1.glb' },
  { name: 'Wooden_beam', url: './Wooden_beam.glb' },
  { name: 'Wooden_floor', url: './Wooden_floor.glb' },
  { name: 'Wooden_gate', url: './Wooden_gate.glb' }
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
controls.minPolarAngle = Math.PI / 3
controls.maxPolarAngle = Math.PI / 2
controls.minAzimuthAngle = -Math.PI / 16
controls.maxAzimuthAngle = Math.PI / 10
controls.minDistance = 3
controls.maxDistance = 6

const meshes = {}
const lights = {}

init()

function init() {
  // we do all of our setup here
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  composer = postprocessing(scene, camera, renderer)

  lights.default = addLights()
  scene.add(lights.default)
  console.log(meshes)

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
      replace: true
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
      controls.minDistance = 3
      controls.maxDistance = 6
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
  requestAnimationFrame(animate)
  // renderer.render(scene, camera)
  composer.render()
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
  // Check if the object exists yet
  if (!meshes.Tsukubai) return;

  meshes.Tsukubai.addEventListener('mouseover', (event) => {
    gsap.to(meshes.Tsukubai.scale, {
      x: 1.1, y: 1.1, z: 1.1,
      duration: 0.75,
      ease: 'bounce',
    })
    
    gsap.to(meshes.Tsukubai.position,
      {
        x: meshes.Tsukubai.position.x,
        y: meshes.Tsukubai.position.y + 0.2,
        z: meshes.Tsukubai.position.z,
        duration: 0.75,
        ease: 'bounce',
      }
    )
    // Video Swap
    meshes.Tsukubai.traverse((child) => {
      if (child.isMesh) {
        // Store the original texture to switch back on mouseout
        if (!child.userData.originalMap) {
          child.userData.originalMap = child.material.map;
        }

        child.material.map = videoTexture;
        child.material.needsUpdate = true;
      }
    });
    // Start the video when hovered
    video.play();
  })

  meshes.Tsukubai.addEventListener('mouseout', () => {
    // Return Scale
    gsap.to(meshes.Tsukubai.scale, {
      x: 1, y: 1, z: 1,
      duration: 0.75,
      ease: 'bounce',
    })

    gsap.to(meshes.Tsukubai.position,
      {
        x: meshes.Tsukubai.position.x,
        y: meshes.Tsukubai.position.y - 0.2,
        z: meshes.Tsukubai.position.z,
        duration: 0.75,
        ease: 'bounce',
      }
    )
    // Return to Original Texture
    meshes.Tsukubai.traverse((child) => {
      if (child.isMesh && child.userData.originalMap !== undefined) {
        child.material.map = child.userData.originalMap;
        child.material.needsUpdate = true;
      }
    });

    // Optional: video.pause(); 
  })

  interactionManager.add(meshes.Tsukubai)
}

