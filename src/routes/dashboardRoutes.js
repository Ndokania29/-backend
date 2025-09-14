// routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const dashboard = require('../controllers/dashboardController');
const { authenticate } = require('../middleware/auth'); // your Clerk/other auth middleware

// Protect all dashboard endpoints with authenticate() so req.tenantId exists
router.use(authenticate);

// Endpoints
router.get('/overview', dashboard.getOverview);
router.get('/orders-by-date', dashboard.getOrdersByDate); // query: startDate, endDate, groupBy
router.get('/products/performance', dashboard.getProductPerformance);
router.get('/customers/insights', dashboard.getCustomerInsights);
router.get('/funnel', dashboard.getFunnel); // query days
router.get('/profitability', dashboard.getProfitability);
router.get('/full', dashboard.getFullDashboard);

module.exports = router;
