# Dùng Nginx nhẹ, ổn định
FROM nginx:alpine

# Xóa config mặc định
RUN rm -rf /usr/share/nginx/html/*

# Copy toàn bộ source web vào nginx
COPY . /usr/share/nginx/html

# Expose port 80 (Render tự map)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
