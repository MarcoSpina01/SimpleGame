import * as THREE from 'three';

export class Terrain extends THREE.Mesh {
    constructor(width, height) {
        super();

        this.width  = width;
        this.height = height;
        this.treeCount = 10;

        this.createTerrain();
        this.createTrees();
    }

    createTerrain() {
        if (this.terrain) {
            this.terrain.geometry.dispose()
            this.terrain.material.dispose()
        } 
        const terrainMaterial = new THREE.MeshStandardMaterial({ color:0x50a000});
        const terrainGeometry = new THREE.PlaneGeometry(this.width, this.height);
        this.terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
        this.terrain.rotation.x = - Math.PI / 2;
        this.terrain.position.set(this.width / 2, 0, this.height / 2);
        this.add(terrainMesh);
    }

    createTrees() {
        const treeHeight = 1;
        const treeRadius = 0.2;
        
        const treeGeometry = new THREE.ConeGeometry(0.2, 1, 8);
        const treeMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x305010, 
            flatShading: true
        });

        this.trees = new THREE.Group();
        this.add(this.trees);
        for (let i = 0; i < this.treeCount; i++) {
            const treeMesh = new THREE.Mesh(treeGeometry, treeMaterial);
            treeMesh.rotation.x = Math.PI / 2;
            treeMesh.position.z = treeHeight / 2;
            this.trees.add(treeMesh);
        }
    }
}