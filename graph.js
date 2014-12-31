var Graph = Class.extend({
    /**
     * Loads the graphStructure JSON object
     * @param {graph} graphStructure
     */
    init: function(graphStructure){
        // Sets local data to the passed in structure
        this.data = graphStructure;
    },
    /**
     * Inserts a vertex into the graph with a label
     * @param {vertex} label
     */
    insertVertex: function(label){
        // Inserts the new vertex into the JSON object
        this.data[label] = {
            // Blank edgelist
            "edgelist":{}
        }
    },
    /**
     * Inserts an edge between two vertices
     * @param {vertex} v
     * @param {vertex} u
     */
    insertEdge: function(v,u){
        // Adds edge between v to u
        this.data[v].edgelist[u] = true;
        // Adds edge between u to v
        this.data[u].edgelist[v] = true;
    },
    /**
     * Deletes the vertex from the graph
     * @param {vertex} v
     */
    deleteVertex: function(v){
        // Deletes all edges to v
        this.deleteEdges(v);
        // Deletes v from graph
        delete this.data[v];
    },
    /** 
     * Deletes all edges incident v
     * @param {vertex} v
     */
    deleteEdges: function(v){
        // Gets the adjcent vertices on v
        var vertices = this.adjcentVertices(v);
        // For each vertex in vertices
        for(var i = 0; i < vertices.length; i++){
            // Delete the edge between vertex and v
            delete this.data[vertices[i]].edgelist[v];
        }
    },
    /**
     * Deletes edge between v and u
     * @param {vertex} v
     * @param {vertex} u
     */
    deleteEdge: function(v,u){
        // Removes edge between v to u
        delete this.data[v].edgelist[u];
        // Removes edge between u to v
        delete this.data[u].edgelist[v];
    },
    /** 
     * Returns array of adjcent vertices
     * @param {vertex} v
     */
    adjcentVertices: function(v){
        // Store vertices
        var vertices = [];
        // For each edge incident v
        for (var vertex in this.data[v].edgelist)
        {
            // Push the vertex into vertices
            vertices.push(vertex);
        }
        // return the vertices
        return vertices;
    }



});