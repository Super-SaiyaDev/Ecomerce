exports.success = (req, res, mesnsaje = "", status = 200) => {
  res.status(status).send({
    error: false,
    status: status,
    body: mesnsaje,
  });
};

exports.error = (req, res, mesnsaje, status = 500) => {
  res.status(status).send({
    error: false,
    status: status,
    body: mesnsaje,
  });
};

exports.handleLogin  = (req, res , items) => {
  if(items.length > 0){
    res.json({status: `Success` })
  } else {
    res.json({Error: `Error` })
  }

}

