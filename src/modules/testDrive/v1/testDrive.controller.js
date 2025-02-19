const bookTestDrive = async (req, res, next) => {
  const { userId, slotId } = req.body;

  const data = testDriveService.bookTestDrive({ userId, slotId });

  return res.status(200).json({ success: true, data });
};

module.exports = {
  bookTestDrive,
}
