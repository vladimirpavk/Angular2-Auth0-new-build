/// <reference path="../typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path';
import * as jwt from 'express-jwt';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
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

        //this._app.use('/usersApi', jwtCheck);
     
        //UsersAPi and REST   
        this._usersApi=new UsersApi();      
        this._app.get('/usersApi/listUsers', (req,res)=>this._listUsers(req, res));
        
        this._app.use('/usersApi/user', bodyParser.urlencoded({
            extended: false
            }));                
        this._app.use('/usersApi/user', bodyParser.json());
        this._app.post('/usersApi/user', (req, res)=>this._addUser(req, res));
        this._app.delete('/usersApi/user', (req, res)=>this._deleteUser(req, res));
        this._app.get('/usersApi/user/:id', (req, res)=>this._showUserById(req, res));

        this._app.get('*', (req, res)=>this._renderPage(req, res));        
     }    

     private _listUsers(req: express.Request, res: express.Response){       
        res.status(200).json(this._usersApi.getAllUsers());         
     }

     private _addUser(req:express.Request, res: express.Response){
         console.log("addUser");
         console.log(req.body);
      
         let finished=this._usersApi.addUser(req.body.data);
         if(finished) res.status(201).json({
             "message": "User created"
         })
         else res.status(400).json({
             "message": "User with the same id already exists"
         })                 
     }     

     private _deleteUser(req:express.Request, res: express.Response){
            console.log("From server deleteUser :" + req.body);
            
            let finished=this._usersApi.deleteUser(req.body.id);
            if(finished) return res.status(200).json({"message": "User deleted successfully"})
            else return res.status(400).json({"message": "User with id does not exists"});                     
     }

     private _showUserById(req:express.Request, res: express.Response){
        let response=this._usersApi.getUserById(req.params['id']);
        if(response == null)
        {
            return res.status(404).json({
                "message": "User with the specified id has not been found..."
            });
        }
        else
        {
            return res.status(200).json(response);
        }
                           
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