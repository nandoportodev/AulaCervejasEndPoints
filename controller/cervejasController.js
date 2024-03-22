import { Cerveja } from "../models.js/Compras.js";

const getCervejas = async (req, res) => {
    try {
        const cervejas = await Cerveja.findAll({ attributes: ['nome'] });
        res.status(200).json({ cervejas });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao obter cervejas." });
    }
};

const postCerveja = async (req, res) => {
    const { nome, abv, tipo, nacionalidade } = req.body;
    try {
        const novaCerveja = await Cerveja.create({ nome, abv, tipo, nacionalidade });
        res.status(201).json({ novaCerveja });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao adicionar cerveja." });
    }
};

const putCerveja = async (req, res) => {
    const { id } = req.params;
    const { nome, abv, tipo, nacionalidade } = req.body;
    try {
        const cerveja = await Cerveja.findByPk(id);
        if (!cerveja) {
            return res.status(404).json({ message: "Cerveja não encontrada." });
        }
        await cerveja.update({ nome, abv, tipo, nacionalidade });
        res.status(200).json({ cerveja });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao atualizar cerveja." });
    }
};

const deleteCerveja = async (req, res) => {
    const { id } = req.params;
    try {
        const cerveja = await Cerveja.findByPk(id);
        if (!cerveja) {
            return res.status(404).json({ message: "Cerveja não encontrada." });
        }
        await cerveja.destroy();
        res.status(204).json();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao excluir cerveja." });
    }
};

const getCervejaById = async (req, res) => {
    const { id } = req.params;
    try {
        const cerveja = await Cerveja.findByPk(id);
        if (!cerveja) {
            return res.status(404).json({ message: "Cerveja não encontrada." });
        }
        res.status(200).json({ cerveja });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao obter cerveja." });
    }
};

const getCervejasByNacionalidade = async (req, res) => {
    const { pais } = req.params;
    try {
        const cervejas = await Cerveja.findAll({ where: { nacionalidade: pais } });
        res.status(200).json({ cervejas });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao obter cervejas por nacionalidade." });
    }
};

const getCervejasByTipo = async (req, res) => {
    const { tipo } = req.params;
    try {
        const cervejas = await Cerveja.findAll({ where: { tipo } });
        res.status(200).json({ cervejas });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao obter cervejas por tipo." });
    }
};

export { getCervejas, postCerveja, putCerveja, deleteCerveja, getCervejaById, getCervejasByNacionalidade, getCervejasByTipo };
