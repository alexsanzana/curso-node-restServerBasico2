const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    // podemos establecer valores por defecto en caso de no enviarlos
    const { q, nombre = 'no name', apellido = 'No last name', apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'Get API - usuariosGet',
        q,
        nombre,
        apellido,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post API - usuariosPost',
        nombre,
        edad
    });
}
const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'Put API -  usuariosPut',
        id
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - usuariosPatch'
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - usuariosDelete'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}