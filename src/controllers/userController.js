console.log('userController module loaded');
exports.getUser = (req, res) => {
  res.json({ id: 1, nama: "Enggar", email: "2410501067@upnvj.ac.id" });
};