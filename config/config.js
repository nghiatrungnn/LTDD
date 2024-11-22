// Import các thư viện cần thiết
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');

// Cấu hình chung cho cơ sở dữ liệu và server
const config = {
  database: {
    name: 'fellow4U',
    username: 'nghiatrung', // Thay thế bằng tên người dùng thực tế của bạn
    password: '1234', // Thay thế bằng mật khẩu thực tế của bạn
    host: 'db4free.net', // Địa chỉ host db4free
    dialect: 'mysql',
    logging: console.log
  },
  server: {
    port: 5000
  }
};

// Khởi tạo Express app và Sequelize instance
const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize(
  config.database.name,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
    port: 3306 // Cổng mặc định cho MySQL
  }
);

// Kiểm tra kết nối cơ sở dữ liệu
sequelize.authenticate()
  .then(() => {
    console.log('Kết nối thành công với cơ sở dữ liệu MySQL');
  })
  .catch(err => {
    console.error('Lỗi kết nối:', err);
  });

module.exports = { app, sequelize, config };
