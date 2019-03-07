export default {
  'POST /api/fetchBadge': (req, res) => {
    const { userId } = req.body;
    console.log(`/api/fetchBadge: userId=[${userId}]`);
    res.send({
      lifeBadge: 12,
      koubeiBadge: 'new',
    });
  },
};
