module.exports = (req, res, next) => {
    const { descricao, categoria } = req.body;

    if (!descricao) {
        return res.status(400)
        .json({ data: 'Propiedade \'descricao\' deve ser inserida', succes: false });
    }

    if (!categoria) {
        return res.status(400)
        .json({ data: 'Propiedade \'categoria\' deve ser inserida', succes: false });
    }

    return next();
};