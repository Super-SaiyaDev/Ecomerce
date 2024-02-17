exports.success = (req, res, mesnsaje = "", status = 200) => {
  res.status(status).send({
    error: false,
    status: status,
    body: mesnsaje,
  });
};

exports.error = (req, res, mesnsaje = "Feild Error", status = 500) => {
  res.status(status).send({
    error: false,
    status: status,
    body: mesnsaje,
  });
};
