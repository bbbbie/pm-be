export default ({ env }) => ({
  // BẮT ĐẦU PLUGIN CKEDITOR
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        // Cấu hình Editor nằm ở đây
        config: {
          // 1. THANH CÔNG CỤ (TOOLBAR)
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "|",
              "fontColor",
              "fontBackgroundColor", // <-- Phải có cái này
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "link",
            ],
            shouldNotGroupWhenFull: true,
          },

          // 2. CẤU HÌNH MÀU SẮC (Nằm chung cấp với toolbar)
          fontColor: {
            colors: [
              { color: "#FF0000", label: "Đỏ chuẩn (Tiêu đề)" }, // Màu bạn cần
              { color: "#000000", label: "Đen" },
              { color: "#333333", label: "Xám đậm" },
              { color: "#FFFFFF", label: "Trắng", hasBorder: true },
            ],
          },
        },
      },
    },
  },
  // KẾT THÚC PLUGIN CKEDITOR
});
