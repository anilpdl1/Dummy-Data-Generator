import express from "express";
import fs from 'fs'
import mongoose from "mongoose";
import {Data} from './addData.js';
import path from "path";
const app=express();
let __dirname=path.resolve();
app.use('/static', express.static(path.join(__dirname, '/data/templates')));
app.use(express.json())

let names=['Ram','shyam','hari'];
let salarys=[50000,30000,40000];
let languages=['python','java','javascript'];
let isManagers=[true,false];
let citys=['New-York','Pokhara','Mumbai'];
let a= await mongoose.connect('mongodb://localhost:27017/company');
app.get('/templates/temp.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates', 'temp.html'));
  });
app.post('/templates/temp.html',async(req,res)=>{
   await Data.deleteMany({})
   .then(()=>{console.log('collection dropped successfully')})
   .catch(()=>{console.log('failed to drop collection')});
   const dataEntries=[];
   for (let i = 0; i < 10; i++) {
    dataEntries.push({
      name: names[Math.floor(Math.random() * names.length)],
      salary: salarys[Math.floor(Math.random() * salarys.length)],
      language: languages[Math.floor(Math.random() * languages.length)],
      city: citys[Math.floor(Math.random() * citys.length)],
      isManager: isManagers[Math.floor(Math.random() * isManagers.length)],
    });
  }
  await Data.insertMany(dataEntries);
    res.send('data stored successfully');
})
app.listen(3000,()=>{
    console.log('server running at port 3000')
});

