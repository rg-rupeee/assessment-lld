const express = require('express');

const router = express.Router;

router.post(
  '/', 
  validator(testDriveDTO.bookTestDrive), 
  testDriveController.bookTestDrive
);

module.exports = router;
