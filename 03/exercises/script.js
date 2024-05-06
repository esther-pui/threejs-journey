import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()


// Create object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: '#ffb7ce'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Scene sizes
const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3
scene.add(camera)

// renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
