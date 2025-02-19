const bookTestDrive = async ({ userId, slotId }) => {
  const [] = await Promise.all(
    userModel.find({userId}).
    slotModel.find()
  ) 
}