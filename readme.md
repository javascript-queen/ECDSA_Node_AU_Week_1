## ECDSA Node

My own node design is shown hereby:

<img width="1440" alt="Screenshot 2023-07-25 at 16 16 18" src="https://github.com/javascript-queen/ECDSA_Node_AU_Week_1/assets/90614620/7976bff6-a233-4ad1-8312-cce0be4df3cf">

<img width="755" alt="Screenshot 2023-07-25 at 16 16 29" src="https://github.com/javascript-queen/ECDSA_Node_AU_Week_1/assets/90614620/c3d253cb-a155-4774-a455-61462c7b6fbd">

<img width="574" alt="Screenshot 2023-07-25 at 16 17 11" src="https://github.com/javascript-queen/ECDSA_Node_AU_Week_1/assets/90614620/012797c8-190d-4798-ab20-f2b38e332245">

The project is deployed [here](https://ecdsa-node-au-week-1.vercel.app).

### This text below is copied from the Alchemy University repo [here](https://github.com/alchemyplatform/ecdsa-node/tree/main). 

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 
