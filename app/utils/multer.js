const multer=require("multer");
const path=require("path");
const fs=require("fs");
const createerror=require("http-errors");
const { string } = require("@hapi/joi");

function CreateMulter(req){
const date=new Date();
const year=date.getFullYear().toString();
const month=date.getMonth().toString();
const day=date.getDate().toString();
const directory=path.join(__dirname,"..","..","public","uploads","blogs",year,month,day);
req.body.fileUploadPath=path.join("uploads","blogs",year,month,day);
fs.mkdirSync(directory,{recursive:true});
return directory
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    const filePath=CreateMulter(req);
    cb(null,filePath);
    },
    filename:(req,file,cb)=>{
    const ext=path.extname(file.originalname);
    const image=req.body.image(/\\/g,"/");
    const fileName=String(new Date().getTime() + ext)
    req.body.filename=fileName;
    cb(null,fileName);    
    } 

    })
    function fileFilter(req,file,cb){
    const ext=path.extname(file.originalname);
    const mimetype=[".jpg",".jpeg",".gif","webp","png"];
    if(mimetype.includes(ext)){
        return cb(null,true)
    }
    return cb(createerror.BadRequest("فرمت ارسال شده صحیح نمی باشد"));    
    }
    const maxsize=1*1000*1000;
    const uploadFile=multer({storage,fileFilter,limits:{fieldSize:maxsize}});

    module.exports={
        uploadFile
    }