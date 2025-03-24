export const getCart = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                error: "no image uploaded"
            })
        }
        console.log('cart route hit');
        res.json({ imageUrl: req.file.path })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}