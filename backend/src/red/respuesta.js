exports.success = (req, res, mesnsaje = "", status = 200) => {
  res.status(status).send({
    success: false,
    status: status,
    body: mesnsaje,
  });
};

exports.error = (req, res, mesnsaje, status = 500) => {
  res.status(status).send({
    error: true,
    status: status,
    body: mesnsaje,
  });
};

exports.handleLogin = (req, res, mensaje, items) => {
  if (items.length > 0) {
    res.json({ status: `Success ${mensaje}` });
  } else {
    res.json({ Error: `Error ${mensaje}` });
  }
};