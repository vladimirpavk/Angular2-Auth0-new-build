/// <reference path="../typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path';
import * as jwt from 'express-jwt';
import * as cors from 'cors';
//import { User } from './usersApi/user.module';
import { UsersApi } from './usersApi/usersApi';

export class ServerApp {
    private _app: express.Express;
    private _port: number;
    private _usersApi: UsersApi;

    constructor(port: number){
        this._app = express();
        this._app.use(cors());

        this._port = port;
                      
        let jwtCheck = jwt({
            secret: new Buffer('mWjrEcHoJqen2j7_50wtyOArgVFbqEsdogdM4jAmB2l3T-eieXJBg6ECXl8FPH6i', 'base64'),
                    audience: 'ZCQZGEfRBplS91vkwBOe4EIGa8FnpkiQ'
        });

        this._app.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));        
        this._app.use('/www', express.static(path.resolve(__dirname, '../client')));        

        //UsersAPi and REST   
        //this._app.use('/usersApi', jwtCheck);
        this._usersApi=new UsersApi();      
        this._app.get('/usersApi/listUsers', (req,res)=>this._listUsers(req, res));
        this._app.post('/usersApi/addUser', (req, res)=>this._addUser(req, res));
        //this._app.delete('/usersApi/deleteUser', (req, res)=>this._deleteUser(req, res));
        this._app.get('/usersApi/deleteUser/:id', (req, res)=>this._deleteUser(req, res));        
        this._app.get('/usersApi/:id', (req, res)=>this._showUserById(req, res));



        this._app.get('*', (req, res)=>this._renderPage(req, res));        
     }    

     private _listUsers(req: express.Request, res: express.Response){
       //  console.log(this._usersApi.getAllUsers());
         // res.status(200).json(this._usersApi.getAllUsers());
         res.status(401).json({ "message" : "Eror"});        
     }

     private _addUser(req:express.Request, res: express.Response){
         console.log("addUser");
         res.status(401);         
     }     

     private _deleteUser(req:express.Request, res: express.Response){
            //res.status(200).json(this._usersApi.deleteUser(req.params['id']));
            res.send(401);          
     }

     private _showUserById(req:express.Request, res: express.Response){
        //console.log(req.params['id']);
        return res.status(200).json(
            this._usersApi.getUserById(req.params['id'])
        );
     }

    private _renderOk(req: express.Request, res: express.Response){
        res.json({
            "message": "allOK"
        });        
    }

    private _renderPage(req: express.Request, res: express.Response){ 
        console.log("angular route requested...");               
        res.sendFile(path.resolve(__dirname, '../client/index.html'));
    }

    public startServer(){
        this._app.listen(this._port, ()=>{
            console.log("Server is listening at port "+this._port);
        });        
    }
    
}