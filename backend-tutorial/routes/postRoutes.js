const express = require('express');
const multer = require('multer');
const { getPosts, createPost } = require('../controllers/postController');

const router = express.Router();

// cấu hình multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // thư mục lưu ảnh, nhớ tạo sẵn
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // tên file duy nhất
  }
});
const upload = multer({ storage: storage });

// route GET
router.get('/', getPosts);

// route POST có kèm hình ảnh
// 'image' là tên field client gửi (formData.append("image", file))
router.post('/', upload.single('image'), createPost);

module.exports = router;
