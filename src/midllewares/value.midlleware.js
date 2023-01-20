module.exports = (req, res, next) => {
    const { valor } = req.body;
    if (!valor) {
        return res.status(400)
        .json({ data: 'Propiedade \'valor\' deve ser inserida', succes: false });
    }
    const bool = valor.includes(',');
    if (bool) {
        const array = valor.split(',');
        if (array[1].length !== 2) {
            return res.status(400)
            .json({ data: 'Propiedade \'valor\' está com formato incorreto', succes: false });
        }
    } else {
        return res.status(400)
        .json({ data: 'Propiedade \'valor\' está com formato incorreto', succes: false });
    }

    return next();
};