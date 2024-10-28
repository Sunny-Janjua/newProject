// middleware/errorMiddleware.js
const errorHandler = (err, req, res, next) => {
    console.error("Error:", err);
    if (res.headersSent) {
      return next(err);
    }
  
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
  
    // Render an error page
    res.status(statusCode).render("error", { message, statusCode });
  };
  
  export default errorHandler;
  