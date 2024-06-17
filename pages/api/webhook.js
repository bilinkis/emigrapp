export default async function handler(
    req,
    res
) {
    console.log('webhook called', req.body)
    return res.status(200).JSON(true);
}
