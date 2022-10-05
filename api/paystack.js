
class paystackApi {
    verifyPayment = (req, res) => {
        return res.status(200).send({ message: 'ok' })
    }
}

module.exports = new paystackApi()