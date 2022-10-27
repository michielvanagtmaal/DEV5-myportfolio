import './style.css'
import javascriptLogo from './javascript.svg'
//import three
import * as THREE from 'three';
//import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Loader, Material } from 'three';
// import gltf loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add directional light
const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 1, 1 ).normalize();
scene.add( light );


//ORBIT CONTROLS
const controls = new OrbitControls( camera, renderer.domElement );


// texture loader
const textureloaderSand = new THREE.TextureLoader();
const sandTexture = textureloaderSand.load('/assets/textures/sand.jpeg');

const textureloaderWall = new THREE.TextureLoader();
const wallTexture = textureloaderWall.load('/assets/textures/wall.webp');

const textureloaderRoof = new THREE.TextureLoader();
const roofTexture = textureloaderRoof.load('/assets/textures/roof.webp');

const textureloaderSmall = new THREE.TextureLoader();
const smallTexture = textureloaderSmall.load('/assets/textures/wallHorizontal.webp');

const textureloaderNail = new THREE.TextureLoader();
const nailTexture = textureloaderNail.load('/assets/textures/nail.webp');

const textureloaderName = new THREE.TextureLoader();
const nameTexture = textureloaderName.load('/assets/textures/name.webp');

const textureloaderPaal = new THREE.TextureLoader();
const paalTexture = textureloaderPaal.load('/assets/textures/wood.jpeg');

const textureloadSky = new THREE.TextureLoader();
const skyTexture = textureloadSky.load('/assets/textures/sky.jpeg');

// create a box
const sand = new THREE.BoxGeometry(10, 10, 0.1);
const sandMaterial = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
sandMaterial.map = sandTexture;
const sandMesh = new THREE.Mesh( sand, sandMaterial );
// rotate the box
sandMesh.rotation.x = Math.PI/2;
// move the box
sandMesh.position.y = -1;
scene.add( sandMesh );

const wallBack = new THREE.PlaneGeometry(3, 2);
const wallBackMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallBackMaterial.map = wallTexture;
wallBackMaterial.side = THREE.DoubleSide;
const wallBackMesh = new THREE.Mesh( wallBack, wallBackMaterial );
wallBackMesh.position.z = -2;

scene.add( wallBackMesh );

const wallLeft = new THREE.PlaneGeometry(2, 2);
const wallLeftMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallLeftMaterial.map = wallTexture;
wallLeftMaterial.side = THREE.DoubleSide;
const wallLeftMesh = new THREE.Mesh( wallLeft, wallLeftMaterial );
wallLeftMesh.rotation.y = Math.PI/2;
wallLeftMesh.position.x = -1.5;
wallLeftMesh.position.z = -1;
scene.add( wallLeftMesh );

const wallRight = new THREE.PlaneGeometry(1.5, 2);
const wallRightMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallRightMaterial.map = wallTexture;
wallRightMaterial.side = THREE.DoubleSide;
const wallRightMesh = new THREE.Mesh( wallRight, wallRightMaterial );
wallRightMesh.rotation.y = Math.PI/2;
wallRightMesh.position.x = 1.5;
wallRightMesh.position.z = -1.25;
scene.add( wallRightMesh );

const roof = new THREE.BoxGeometry(3.2, 3, 0.05);
const roofMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
roofMaterial.map = roofTexture;
roofMaterial.side = THREE.DoubleSide;
const roofMesh = new THREE.Mesh( roof, roofMaterial );
roofMesh.rotation.x = Math.PI/2;
roofMesh.position.y = 1;
roofMesh.position.z = -0.6;
scene.add( roofMesh );

const wallSmall = new THREE.PlaneGeometry(1.5, 0.75);
const wallSmallMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallSmallMaterial.map = smallTexture;
wallSmallMaterial.side = THREE.DoubleSide;
const wallSmallMesh = new THREE.Mesh( wallSmall, wallSmallMaterial );
wallSmallMesh.position.x = -0.75;
wallSmallMesh.position.y = 0.625;
wallSmallMesh.position.z = 0;
scene.add(wallSmallMesh);


const wallSmall2 = new THREE.PlaneGeometry(1.7, 0.75);
const wallSmall2Material = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallSmall2Material.map = smallTexture;
wallSmall2Material.side = THREE.DoubleSide;
const wallSmall2Mesh = new THREE.Mesh( wallSmall2, wallSmall2Material );
wallSmall2Mesh.position.x = -0.65;
wallSmall2Mesh.position.y = -0.6;
wallSmall2Mesh.position.z = 0;
scene.add(wallSmall2Mesh);


const wallH = new THREE.PlaneGeometry(0.5, 1.5);
const wallHMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallHMaterial.map = wallTexture;
wallHMaterial.side = THREE.DoubleSide;
const wallHMesh = new THREE.Mesh( wallH, wallHMaterial );
wallHMesh.position.z = 0.01;
wallHMesh.position.x = -1.3;
wallHMesh.rotation.z = 0.1;

scene.add( wallHMesh );

const wallH2 = new THREE.PlaneGeometry(0.7, 1.2);
const wallH2Material = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
wallH2Material.map = wallTexture;
wallH2Material.side = THREE.DoubleSide;
const wallH2Mesh = new THREE.Mesh( wallH2, wallH2Material );
wallH2Mesh.position.z = 0.01;
wallH2Mesh.position.x = -0.2;
wallH2Mesh.rotation.z = -0.1;

scene.add( wallH2Mesh );

const nail = new THREE.CircleGeometry(0.03, 32);
const nailMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
nailMaterial.map = nailTexture;
nailMaterial.side = THREE.DoubleSide;
const nailMesh = new THREE.Mesh( nail, nailMaterial );
nailMesh.position.z = 0.011;
nailMesh.position.x = -1.3;
nailMesh.position.y = 0.4;

scene.add( nailMesh );

const nail2 = new THREE.CircleGeometry(0.03, 32);
const nail2Material = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
nail2Material.map = nailTexture;
nail2Material.side = THREE.DoubleSide;
const nail2Mesh = new THREE.Mesh( nail2, nail2Material );
nail2Mesh.position.z = 0.011;
nail2Mesh.position.x = -0.1;
nail2Mesh.position.y = 0.49;

scene.add( nail2Mesh );


const nameBg = new THREE.BoxGeometry(0.6, 0.3, 0.05);
const nameBgMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
nameBgMaterial.map = nameTexture;
const nameBgMesh = new THREE.Mesh( nameBg, nameBgMaterial );
nameBgMesh.position.z = 0.68;
nameBgMesh.position.x = 1.45;
nameBgMesh.position.y = 0.5;
scene.add( nameBgMesh );


const paal = new THREE.CylinderGeometry(0.1, 0.1, 2);
const paalMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
paalMaterial.map = paalTexture;
paalMaterial.side = THREE.DoubleSide;
const paalMesh = new THREE.Mesh( paal, paalMaterial );
paalMesh.position.z = 0.56;
paalMesh.position.x = 1.45;
paalMesh.position.y = 0;
scene.add( paalMesh );

const sky = new THREE.SphereGeometry(100, 32, 32);
const skyMaterial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa} );
skyMaterial.map = skyTexture;
skyMaterial.side = THREE.DoubleSide;
const skyMesh = new THREE.Mesh( sky, skyMaterial );
scene.add( skyMesh );

const gltfLoader = new GLTFLoader();
const addCloud = (x, y, z, s) => {
	let cloud;
	gltfLoader.load('/assets/models/cloud.glb', (gltf) => {
		cloud = gltf.scene;
		cloud.position.set(x, 5, z);
		cloud.scale.set(0.5, 0.5, 0.5);
		scene.add(cloud);
	});
}
for(let i = 0; i < 20; i++) {
	let sign = Math.random() < 0.5 ? 1 : -1;
	let x = Math.random() * 40 * sign;
	sign = Math.random() < 0.5 ? 1 : -1;
	let y = Math.random() * 40 * sign;
	sign = Math.random() < 0.5 ? 1 : -1;
	let z = Math.random() * 40 * sign;
	let s = Math.random() * 5;
	addCloud(x, y, z, s);
}



const loader = new GLTFLoader();

loader.load("/assets/models/tree.glb", (gltf) => {
  const tree = gltf.scene;
  tree.position.set(0, -1, 0);
  tree.scale.set(0.02, 0.02, 0.02);
  tree.rotation.set(0, 0, 0);
  scene.add(tree);
});


camera.position.z = 5;

function animate() {
  

  requestAnimationFrame( animate );
  renderer.render( scene, camera );
 
};


	animate();