export default (app) => {
    app.get('/health', (req, res) => {
        res.json({ status: 'OK' });
    });
}