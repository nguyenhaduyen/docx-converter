import mammoth from "mammoth";

export default async function handler(req, res) {
  try {
    const base64 = req.body.file;

    const buffer = Buffer.from(base64, "base64");

    const result = await mammoth.extractRawText({ buffer });

    res.status(200).json({
      text: result.value
    });

  } catch (e) {
    res.status(500).json({
      error: e.message
    });
  }
}
