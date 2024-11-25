// Import các thư viện cần thiết
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Cấu hình chung cho cơ sở dữ liệu và server
const config = {
  database: {
    uri: 'mongodb://localhost:27017/fellow4U', // Địa chỉ kết nối MongoDB
  },
  server: {
    port: 5000
  }
};

// Khởi tạo Express app
const app = express();
app.use(bodyParser.json());

// Kết nối đến MongoDB
mongoose.connect(config.database.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Kết nối thành công với cơ sở dữ liệu MongoDB');
  })
  .catch(err => {
    console.error('Lỗi kết nối:', err);
  });

module.exports = { app, mongoose, config };
