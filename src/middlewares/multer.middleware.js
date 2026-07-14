import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {  // in req - json data but not file data that is why multer is used
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // can change it learn more
  }
})

export const upload = multer({ 
    storage,
 })