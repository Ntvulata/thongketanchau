// ============================================
// WEBSITE GIỚI THIỆU ĐƠN VỊ - MAIN APP
// ============================================

(function() {
  'use strict';

  // =====================
  // DEFAULT DATA
  // =====================
  const DEFAULT_DATA = {
    site: {
      parentName: 'CƠ QUAN CHỦ QUẢN',
      name: 'ĐƠN VỊ ABC',
      slogan: 'Đoàn kết - Kỷ cương - Sáng tạo - Hiệu quả',
      bannerImage: '',
      logoImage: ''
    },
    about: {
      content: '<p>Đơn vị ABC được thành lập năm 2000, trải qua hơn 20 năm xây dựng và phát triển, đơn vị đã không ngừng lớn mạnh về mọi mặt.</p><p>Với đội ngũ cán bộ, công chức, viên chức tâm huyết, trách nhiệm, đơn vị luôn hoàn thành xuất sắc mọi nhiệm vụ được giao.</p><p><strong>Sứ mệnh:</strong> Phục vụ nhân dân, xây dựng và phát triển.</p><p><strong>Tầm nhìn:</strong> Trở thành đơn vị hàng đầu trong lĩnh vực hoạt động.</p>',
      image: '',
      values: [
        { title: 'Sứ mệnh', desc: 'Phục vụ nhân dân, đóng góp cho sự phát triển chung' },
        { title: 'Tầm nhìn', desc: 'Xây dựng đơn vị vững mạnh, hiện đại' },
        { title: 'Giá trị cốt lõi', desc: 'Trung thực - Trách nhiệm - Chuyên nghiệp' },
        { title: 'Phương châm', desc: 'Lấy hiệu quả công việc làm thước đo' }
      ]
    },
    contact: {
      address: '123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh',
      phone: '(028) 1234 5678',
      fax: '(028) 1234 5679',
      email: 'lienhe@donviabc.gov.vn',
      website: 'www.donviabc.gov.vn',
      workingHours: 'Thứ 2 - Thứ 6: 7:30 - 17:00'
    },
    news: [
      {
        id: 1,
        title: 'Hội nghị tổng kết công tác năm 2025',
        summary: 'Ngày 15/01/2026, đơn vị đã tổ chức Hội nghị tổng kết công tác năm 2025 và triển khai nhiệm vụ năm 2026.',
        content: 'Ngày 15/01/2026, đơn vị đã tổ chức Hội nghị tổng kết công tác năm 2025 và triển khai nhiệm vụ năm 2026. Tại hội nghị, các đại biểu đã nghe báo cáo kết quả hoạt động năm 2025 với nhiều thành tích nổi bật. Đơn vị đã hoàn thành xuất sắc các chỉ tiêu được giao, nhiều sáng kiến được áp dụng hiệu quả.',
        image: '',
        date: '2026-01-15'
      },
      {
        id: 2,
        title: 'Tập huấn nâng cao năng lực chuyên môn',
        summary: 'Chương trình tập huấn nhằm nâng cao trình độ chuyên môn, nghiệp vụ cho đội ngũ cán bộ, công chức.',
        content: 'Từ ngày 20-22/02/2026, đơn vị đã tổ chức chương trình tập huấn nâng cao năng lực chuyên môn cho toàn thể cán bộ, công chức, viên chức. Chương trình bao gồm các chuyên đề về kỹ năng quản lý, ứng dụng công nghệ thông tin và cải cách hành chính.',
        image: '',
        date: '2026-02-20'
      },
      {
        id: 3,
        title: 'Hoạt động tình nguyện vì cộng đồng',
        summary: 'Đoàn thanh niên đơn vị tổ chức chương trình tình nguyện tại vùng sâu, vùng xa.',
        content: 'Nhân dịp kỷ niệm ngày thành lập Đoàn TNCS Hồ Chí Minh 26/3, Đoàn thanh niên đơn vị đã tổ chức chương trình tình nguyện vì cộng đồng tại xã vùng sâu, vùng xa. Các đoàn viên đã tham gia các hoạt động như tặng quà, khám bệnh miễn phí và hỗ trợ xây dựng cơ sở hạ tầng.',
        image: '',
        date: '2026-03-26'
      }
    ],
    schedule: [
      { id: 1, date: '2026-08-29', time: '08:00', content: 'Giao ban đầu tuần', location: 'Phòng họp A', person: 'Ban Giám đốc' },
      { id: 2, date: '2026-08-29', time: '14:00', content: 'Họp triển khai kế hoạch quý IV', location: 'Hội trường', person: 'Toàn đơn vị' },
      { id: 3, date: '2026-08-30', time: '09:00', content: 'Tiếp công dân định kỳ', location: 'Phòng tiếp dân', person: 'Phó Giám đốc' },
      { id: 4, date: '2026-08-30', time: '15:00', content: 'Kiểm tra công tác phòng cháy chữa cháy', location: 'Toàn đơn vị', person: 'Phòng HC-QT' },
      { id: 5, date: '2026-09-01', time: '08:30', content: 'Hội nghị sơ kết 6 tháng đầu năm', location: 'Hội trường', person: 'Toàn đơn vị' }
    ],
    documents: [
      { id: 1, title: 'Quyết định ban hành Quy chế làm việc', number: 'QĐ-01/2026', date: '2026-01-05', type: 'QĐ', link: '' },
      { id: 2, title: 'Thông báo lịch nghỉ Tết Nguyên đán 2026', number: 'TB-15/2026', date: '2026-01-20', type: 'TB', link: '' },
      { id: 3, title: 'Kế hoạch công tác năm 2026', number: 'KH-02/2026', date: '2026-01-10', type: 'KH', link: '' },
      { id: 4, title: 'Công văn về việc tăng cường kỷ luật công vụ', number: 'CV-08/2026', date: '2026-02-15', type: 'CV', link: '' },
      { id: 5, title: 'Quyết định khen thưởng cá nhân xuất sắc', number: 'QĐ-12/2026', date: '2026-03-20', type: 'QĐ', link: '' },
      { id: 6, title: 'Thông báo tuyển dụng viên chức năm 2026', number: 'TB-22/2026', date: '2026-04-01', type: 'TB', link: '' }
    ]
  };

  // =====================
  // STORAGE
  // =====================
  const Storage = {
    get(key) {
      try {
        const data = localStorage.getItem('dvWeb_' + key);
        return data ? JSON.parse(data) : null;
      } catch(e) {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem('dvWeb_' + key, JSON.stringify(value));
      } catch(e) {
        console.error('Storage error:', e);
      }
    },
    getData() {
      let data = this.get('data');
      if (!data) {
        data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        this.set('data', data);
      }
      return data;
    },
    saveData(data) {
      this.set('data', data);
    },
    resetData() {
      this.set('data', JSON.parse(JSON.stringify(DEFAULT_DATA)));
    }
  };

  // =====================
  // AUTH
  // =====================
  const Auth = {
    credentials: { username: 'admin', password: 'admin123' },
    isLoggedIn() {
      return sessionStorage.getItem('dvWeb_auth') === 'true';
    },
    login(username, password) {
      if (username === this.credentials.username && password === this.credentials.password) {
        sessionStorage.setItem('dvWeb_auth', 'true');
        return true;
      }
      return false;
    },
    logout() {
      sessionStorage.removeItem('dvWeb_auth');
    }
  };

  // =====================
  // NOTIFICATION
  // =====================
  function showNotification(message, type) {
    type = type || 'success';
    const notif = document.getElementById('notification');
    notif.textContent = message;
    notif.className = 'notification ' + type;
    setTimeout(function() { notif.classList.add('show'); }, 10);
    setTimeout(function() { notif.classList.remove('show'); }, 3000);
  }

  // =====================
  // HELPERS
  // =====================
  function formatDate(dateStr) {
    if (!dateStr) return '';
    var parts = dateStr.split('-');
    if (parts.length === 3) return parts[2] + '/' + parts[1] + '/' + parts[0];
    return dateStr;
  }

  function formatDayOfWeek(dateStr) {
    if (!dateStr) return '';
    var d = new Date(dateStr + 'T00:00:00');
    var days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
    return days[d.getDay()];
  }

  function generateId(arr) {
    if (!arr || arr.length === 0) return 1;
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if ((arr[i].id || 0) > max) max = arr[i].id;
    }
    return max + 1;
  }

  function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // =====================
  // PAGE RENDERERS
  // =====================
  function renderHomePage(data) {
    var latestNews = data.news.slice().sort(function(a, b) { return new Date(b.date) - new Date(a.date); }).slice(0, 3);
    var today = new Date(); today.setHours(0,0,0,0);
    var upcomingSchedule = data.schedule.slice()
      .filter(function(s) { return new Date(s.date + 'T00:00:00') >= today; })
      .sort(function(a, b) { return new Date(a.date) - new Date(b.date); })
      .slice(0, 5);

    var newsHtml = '';
    if (latestNews.length > 0) {
      for (var i = 0; i < latestNews.length; i++) {
        var n = latestNews[i];
        newsHtml += '<div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #eee;">' +
          '<a href="#tin-tuc/chi-tiet/' + n.id + '" style="color:#1a3a5c;font-weight:600;font-size:0.9rem;line-height:1.4;display:block;">' + escapeHtml(n.title) + '</a>' +
          '<small style="color:#999;">' + formatDate(n.date) + '</small></div>';
      }
    } else {
      newsHtml = '<p style="color:#999;font-size:0.9rem;">Chưa có tin tức</p>';
    }

    var scheduleHtml = '';
    if (upcomingSchedule.length > 0) {
      for (var j = 0; j < upcomingSchedule.length; j++) {
        var s = upcomingSchedule[j];
        scheduleHtml += '<div style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee;font-size:0.85rem;">' +
          '<strong style="color:#2980b9;">' + formatDate(s.date) + '</strong> - ' + escapeHtml(s.content) + '</div>';
      }
    } else {
      scheduleHtml = '<p style="color:#999;font-size:0.9rem;">Không có lịch sắp tới</p>';
    }

    var bannerStyle = data.site.bannerColor ? 'background:' + data.site.bannerColor + ';' : '';
    
    return '<div class="banner" style="' + bannerStyle + '">' +
      '<div class="banner-bg" style="' + (data.site.bannerImage ? 'background-image:url(' + data.site.bannerImage + ')' : '') + '"></div>' +
      '<div class="banner-overlay"></div>' +
      '<div class="banner-content">' +
        '<h1 class="banner-title" data-editable="text" data-field="site.name">' + escapeHtml(data.site.name) + '</h1>' +
        '<p class="banner-subtitle" data-editable="text" data-field="site.slogan">' + escapeHtml(data.site.slogan) + '</p>' +
      '</div>' +
      '<div class="banner-edit-tools">' +
        '<div style="display:flex; gap:10px;">' +
          '<button class="btn-change-image" data-image-field="site.bannerImage" style="box-shadow: 0 2px 5px rgba(0,0,0,0.2);">📷 Đổi ảnh nền</button>' +
          (data.site.bannerImage ? '<button onclick="App.removeBannerImage(event)" style="padding:10px 15px; background:#e74c3c; color:white; border:none; border-radius:6px; cursor:pointer; font-weight:600; font-size:0.85rem; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">🗑 Xóa ảnh nền</button>' : '') +
        '</div>' +
        '<div style="background:white; padding:8px 15px; border-radius:6px; display:flex; align-items:center; gap:10px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">' +
          '<span style="font-size:0.9rem; font-weight:600; color:#333;">🎨 Đổi màu nền:</span>' +
          '<input type="color" onchange="App.changeBannerColor(event.target.value)" value="' + (data.site.bannerColor || '#1a3a5c') + '" style="cursor:pointer; width:30px; height:30px; padding:0; border:none;">' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="main-content"><div class="home-grid">' +
      '<div class="home-intro">' +
        '<h2 class="section-title">Giới thiệu chung</h2>' +
        '<div data-editable="text" data-field="about.content">' + data.about.content + '</div>' +
        '<p class="mt-20"><a href="#gioi-thieu" style="color:#2980b9;font-weight:600;">Xem thêm →</a></p>' +
      '</div>' +
      '<div class="home-sidebar">' +
        '<div class="sidebar-box"><h3 class="section-title" style="color:#c0392b;">📰 Tin mới nhất</h3>' + newsHtml + '</div>' +
        '<div class="sidebar-box"><h3 class="section-title" style="color:#c0392b;">📅 Lịch công tác sắp tới</h3>' + scheduleHtml + '</div>' +
      '</div>' +
    '</div></div>';
  }

  function renderAboutPage(data) {
    var imageHtml;
    if (data.about.image) {
      imageHtml = '<div class="editable-image-wrapper" style="width:100%;">' +
        '<img src="' + data.about.image + '" class="about-image" alt="Hình ảnh đơn vị">' +
        '<div class="image-edit-overlay" style="border-radius:8px;"><button class="btn-change-image" data-image-field="about.image">📷 Đổi ảnh</button></div>' +
      '</div>';
    } else {
      imageHtml = '<div class="editable-image-wrapper" style="width:100%;">' +
        '<div class="about-image" style="height:300px;background:linear-gradient(135deg,#1a3a5c,#2980b9);border-radius:8px;display:flex;align-items:center;justify-content:center;color:white;font-size:1.2rem;">Hình ảnh đơn vị</div>' +
        '<div class="image-edit-overlay" style="border-radius:8px;"><button class="btn-change-image" data-image-field="about.image">📷 Đổi ảnh</button></div>' +
      '</div>';
    }

    var valuesHtml = '';
    for (var i = 0; i < data.about.values.length; i++) {
      var v = data.about.values[i];
      valuesHtml += '<div class="about-card">' +
        '<h3 data-editable="text" data-field="about.values.' + i + '.title">' + escapeHtml(v.title) + '</h3>' +
        '<p data-editable="text" data-field="about.values.' + i + '.desc">' + escapeHtml(v.desc) + '</p></div>';
    }

    return '<div class="main-content">' +
      '<h1 class="page-title">Giới thiệu</h1>' +
      '<div class="about-content">' + imageHtml +
        '<div data-editable="text" data-field="about.content" class="mt-20">' + data.about.content + '</div>' +
      '</div>' +
      '<div class="about-grid mt-20">' + valuesHtml + '</div></div>';
  }

  function renderNewsPage(data) {
    var sorted = data.news.slice().sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
    var cardsHtml = '';

    if (sorted.length > 0) {
      for (var i = 0; i < sorted.length; i++) {
        var n = sorted[i];
        var imgTag = n.image ?
          '<img src="' + n.image + '" class="news-card-image" alt="' + escapeHtml(n.title) + '">' :
          '<div class="news-card-image" style="display:flex;align-items:center;justify-content:center;color:#aaa;font-size:0.9rem;">📷 Ảnh bài viết</div>';

        cardsHtml += '<div class="news-card" data-news-id="' + n.id + '">' +
          '<div class="editable-image-wrapper" style="width:100%;display:block;">' +
            imgTag +
            '<div class="image-edit-overlay"><button class="btn-change-image" data-image-field="news.' + n.id + '.image">📷 Đổi ảnh</button></div>' +
          '</div>' +
          '<div class="news-card-body">' +
            '<div class="news-card-date">' + formatDate(n.date) + '</div>' +
            '<h3 class="news-card-title"><a href="#tin-tuc/chi-tiet/' + n.id + '">' + escapeHtml(n.title) + '</a></h3>' +
            '<p class="news-card-summary">' + escapeHtml(n.summary) + '</p>' +
            '<button class="btn-delete" onclick="App.deleteItem(\'news\', ' + n.id + ')">🗑 Xóa</button>' +
          '</div></div>';
      }
      cardsHtml = '<div class="news-list">' + cardsHtml + '</div>';
    } else {
      cardsHtml = '<div class="empty-message">Chưa có bài viết nào</div>';
    }

    return '<div class="main-content">' +
      '<h1 class="page-title">Tin tức - Hoạt động</h1>' +
      '<button class="btn-add" onclick="App.showModal(\'news\')">➕ Thêm bài viết</button>' +
      cardsHtml + '</div>';
  }

  function renderNewsDetail(data, newsId) {
    var article = null;
    for (var i = 0; i < data.news.length; i++) {
      if (data.news[i].id === parseInt(newsId)) { article = data.news[i]; break; }
    }
    if (!article) {
      return '<div class="main-content"><div class="empty-message">Không tìm thấy bài viết</div></div>';
    }

    var imgHtml = '';
    if (article.image) {
      imgHtml = '<div class="editable-image-wrapper" style="width:100%;">' +
        '<img src="' + article.image + '" class="news-detail-image" alt="' + escapeHtml(article.title) + '">' +
        '<div class="image-edit-overlay" style="border-radius:8px;"><button class="btn-change-image" data-image-field="news.' + article.id + '.image">📷 Đổi ảnh</button></div></div>';
    }

    return '<div class="main-content">' +
      '<button class="btn-back" onclick="location.hash=\'#tin-tuc\'">← Quay lại danh sách</button>' +
      '<div class="news-detail">' + imgHtml +
        '<div class="news-detail-date">' + formatDate(article.date) + ' | ' + formatDayOfWeek(article.date) + '</div>' +
        '<h1 class="news-detail-title" data-editable="text" data-field="news.' + article.id + '.title">' + escapeHtml(article.title) + '</h1>' +
        '<div class="news-detail-content" data-editable="text" data-field="news.' + article.id + '.content">' + escapeHtml(article.content) + '</div>' +
      '</div></div>';
  }

  function convertGCalLink(link) {
    if (!link) return '';
    link = link.trim();
    // Already an embed link
    if (link.indexOf('/calendar/embed') >= 0) return link;
    // HTML embed link - extract src from iframe
    if (link.indexOf('<iframe') >= 0) {
      var match = link.match(/src="([^"]+)"/);
      if (match) return match[1];
    }
    // Share link with cid parameter (base64 encoded calendar ID)
    var cidMatch = link.match(/[?&]cid=([^&]+)/);
    if (cidMatch) {
      try {
        var calId = atob(cidMatch[1]);
        return 'https://calendar.google.com/calendar/embed?src=' + encodeURIComponent(calId) + '&ctz=Asia/Ho_Chi_Minh&hl=vi';
      } catch(e) {
        return 'https://calendar.google.com/calendar/embed?src=' + encodeURIComponent(cidMatch[1]) + '&ctz=Asia/Ho_Chi_Minh&hl=vi';
      }
    }
    // Link with src parameter
    var srcMatch = link.match(/[?&]src=([^&]+)/);
    if (srcMatch) {
      return 'https://calendar.google.com/calendar/embed?src=' + srcMatch[1] + '&ctz=Asia/Ho_Chi_Minh&hl=vi';
    }
    // If it's an email or calendar ID directly
    if (link.indexOf('@') >= 0 && link.indexOf('/') < 0) {
      return 'https://calendar.google.com/calendar/embed?src=' + encodeURIComponent(link) + '&ctz=Asia/Ho_Chi_Minh&hl=vi';
    }
    // Fallback: return as-is
    return link;
  }

  function renderSchedulePage(data) {
    var calLink = data.site.googleCalendarLink || '';
    var embedUrl = convertGCalLink(calLink);

    // Google Calendar section
    var calendarHtml = '';
    if (embedUrl) {
      calendarHtml = '<div class="gcal-container">' +
        '<h2 class="section-title">📅 Lịch Google Calendar</h2>' +
        '<iframe src="' + escapeHtml(embedUrl) + '" class="gcal-iframe" frameborder="0" scrolling="no"></iframe>' +
      '</div>';
    }

    // Admin: input to paste Google Calendar link
    var adminCalInput = '<div class="gcal-admin-box btn-add" style="display:none;flex-direction:column;width:100%;padding:15px 20px;">' +
      '<label style="font-weight:600;margin-bottom:8px;color:#1a3a5c;">🔗 Dán link Google Calendar vào đây:</label>' +
      '<div style="display:flex;gap:10px;">' +
        '<input type="text" id="gcalLinkInput" placeholder="Dán link chia sẻ Google Calendar hoặc mã nhúng iframe..." value="' + escapeHtml(calLink) + '" style="flex:1;padding:8px 12px;border:1px solid #ddd;border-radius:6px;font-size:0.85rem;">' +
        '<button onclick="App.saveGCalLink()" style="padding:8px 18px;background:#2980b9;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:600;white-space:nowrap;">Cập nhật</button>' +
        (calLink ? '<button onclick="App.removeGCalLink()" style="padding:8px 14px;background:#e74c3c;color:white;border:none;border-radius:6px;cursor:pointer;font-size:0.8rem;white-space:nowrap;">Xóa</button>' : '') +
      '</div>' +
      '<small style="color:#888;margin-top:6px;">Hỗ trợ: link chia sẻ, mã nhúng iframe, hoặc email Google Calendar</small>' +
    '</div>';

    // Manual schedule table
    var sorted = data.schedule.slice().sort(function(a, b) {
      var dd = new Date(a.date) - new Date(b.date);
      if (dd !== 0) return dd;
      return a.time.localeCompare(b.time);
    });

    var rowsHtml = '';
    if (sorted.length > 0) {
      for (var i = 0; i < sorted.length; i++) {
        var s = sorted[i];
        rowsHtml += '<tr data-schedule-id="' + s.id + '">' +
          '<td><strong>' + formatDayOfWeek(s.date) + '</strong><br><small>' + formatDate(s.date) + '</small></td>' +
          '<td>' + escapeHtml(s.time) + '</td>' +
          '<td>' + escapeHtml(s.content) + '</td>' +
          '<td>' + escapeHtml(s.location) + '</td>' +
          '<td>' + escapeHtml(s.person) + '</td>' +
          '<td><button class="btn-delete" onclick="App.deleteItem(\'schedule\', ' + s.id + ')">🗑</button></td></tr>';
      }
      rowsHtml = '<table class="schedule-table"><thead><tr>' +
        '<th style="width:100px;">Thứ/Ngày</th><th style="width:70px;">Giờ</th>' +
        '<th>Nội dung</th><th style="width:150px;">Địa điểm</th>' +
        '<th style="width:150px;">Thành phần</th><th style="width:60px;"></th>' +
        '</tr></thead><tbody>' + rowsHtml + '</tbody></table>';
    } else {
      rowsHtml = '<div class="empty-message">Chưa có lịch công tác thủ công</div>';
    }

    var manualTitle = embedUrl ? '<h2 class="section-title mt-20">📋 Lịch công tác bổ sung</h2>' : '';

    return '<div class="main-content">' +
      '<h1 class="page-title">Lịch công tác</h1>' +
      adminCalInput +
      calendarHtml +
      manualTitle +
      '<button class="btn-add" onclick="App.showModal(\'schedule\')">➕ Thêm lịch thủ công</button>' +
      rowsHtml + '</div>';
  }

  function renderDocumentsPage(data) {
    var sorted = data.documents.slice().sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
    var typeLabels = { 'QĐ': 'Quyết định', 'TB': 'Thông báo', 'CV': 'Công văn', 'KH': 'Kế hoạch', 'BC': 'Báo cáo', 'HD': 'Hướng dẫn' };
    var typeClasses = { 'QĐ': 'qd', 'TB': 'tb', 'CV': 'cv', 'KH': 'kh' };

    var filterOptionsHtml = '';
    var keys = Object.keys(typeLabels);
    for (var k = 0; k < keys.length; k++) {
      filterOptionsHtml += '<option value="' + keys[k] + '">' + typeLabels[keys[k]] + '</option>';
    }

    var docsHtml = '';
    if (sorted.length > 0) {
      for (var i = 0; i < sorted.length; i++) {
        var d = sorted[i];
        var linkHtml = d.link ? '<a href="' + escapeHtml(d.link) + '" target="_blank" class="doc-download">📥 Tải về</a>' : '<span class="doc-no-link">Chưa có link</span>';
        docsHtml += '<div class="doc-item" data-doc-id="' + d.id + '" data-doc-type="' + d.type + '">' +
          '<div class="doc-icon ' + (typeClasses[d.type] || '') + '">' + escapeHtml(d.type) + '</div>' +
          '<div class="doc-info">' +
            '<div class="doc-title">' + escapeHtml(d.title) + '</div>' +
            '<div class="doc-meta">Số: ' + escapeHtml(d.number) + ' | Ngày: ' + formatDate(d.date) + ' | Loại: ' + (typeLabels[d.type] || d.type) + '</div>' +
          '</div>' +
          linkHtml +
          '<button class="btn-delete" onclick="App.deleteItem(\'document\', ' + d.id + ')">🗑 Xóa</button></div>';
      }
      docsHtml = '<div class="doc-list" id="docListContainer">' + docsHtml + '</div>';
    } else {
      docsHtml = '<div class="empty-message" id="docListContainer">Chưa có văn bản nào</div>';
    }

    return '<div class="main-content">' +
      '<h1 class="page-title">Văn bản</h1>' +
      '<button class="btn-add" onclick="App.showModal(\'document\')">➕ Thêm văn bản</button>' +
      '<div class="doc-filter">' +
        '<select id="docTypeFilter" onchange="App.filterDocs()"><option value="">Tất cả loại văn bản</option>' + filterOptionsHtml + '</select>' +
        '<input type="text" id="docSearchInput" placeholder="Tìm kiếm văn bản..." oninput="App.filterDocs()">' +
      '</div>' + docsHtml + '</div>';
  }

  function convertMapLink(link) {
    if (!link) return '';
    link = link.trim();
    if (link.indexOf('<iframe') >= 0) {
      var match = link.match(/src="([^"]+)"/);
      if (match) return match[1];
    }
    if (link.indexOf('https://www.google.com/maps/embed') === 0) {
      return link;
    }
    return link;
  }

  function renderContactPage(data) {
    var items = [
      { icon: '📍', label: 'Địa chỉ', field: 'contact.address', value: data.contact.address },
      { icon: '📞', label: 'Điện thoại', field: 'contact.phone', value: data.contact.phone },
      { icon: '📠', label: 'Fax', field: 'contact.fax', value: data.contact.fax },
      { icon: '📧', label: 'Email', field: 'contact.email', value: data.contact.email },
      { icon: '🌐', label: 'Website', field: 'contact.website', value: data.contact.website },
      { icon: '🕐', label: 'Giờ làm việc', field: 'contact.workingHours', value: data.contact.workingHours }
    ];

    var itemsHtml = '';
    for (var i = 0; i < items.length; i++) {
      var ci = items[i];
      itemsHtml += '<div class="contact-item">' +
        '<div class="contact-icon">' + ci.icon + '</div><div>' +
        '<div class="contact-label">' + ci.label + '</div>' +
        '<div class="contact-value" data-editable="text" data-field="' + ci.field + '">' + escapeHtml(ci.value) + '</div>' +
        '</div></div>';
    }

    var mapVal = data.contact.mapIframe || '';
    var embedUrl = convertMapLink(mapVal);

    var adminMapInput = '<div class="gcal-admin-box btn-add" style="display:none;flex-direction:column;width:100%;padding:15px 20px;">' +
      '<label style="font-weight:600;margin-bottom:8px;color:#1a3a5c;">🔗 Dán mã nhúng (iframe) Google Maps vào đây:</label>' +
      '<div style="display:flex;gap:10px;">' +
        '<input type="text" id="mapLinkInput" placeholder="Dán thẻ <iframe...> lấy từ Google Maps..." value="' + escapeHtml(mapVal) + '" style="flex:1;padding:8px 12px;border:1px solid #ddd;border-radius:6px;font-size:0.85rem;">' +
        '<button onclick="App.saveMapLink()" style="padding:8px 18px;background:#2980b9;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:600;white-space:nowrap;">Cập nhật</button>' +
        (mapVal ? '<button onclick="App.removeMapLink()" style="padding:8px 14px;background:#e74c3c;color:white;border:none;border-radius:6px;cursor:pointer;font-size:0.8rem;white-space:nowrap;">Xóa</button>' : '') +
      '</div>' +
      '<small style="color:#888;margin-top:6px;">Lên <strong>Google Maps</strong> > Tìm địa điểm > bấm nút <strong>Chia sẻ</strong> > chọn thẻ <strong>Nhúng bản đồ</strong> > bấm <strong>Sao chép HTML</strong> rồi dán vào đây.</small>' +
    '</div>';

    var mapDisplay = embedUrl 
      ? '<iframe src="' + escapeHtml(embedUrl) + '" width="100%" height="300" style="border:0; border-radius:6px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      : '<div class="map-placeholder">🗺️ Chưa cập nhật bản đồ</div>';

    return '<div class="main-content">' +
      '<h1 class="page-title">Liên hệ</h1>' +
      adminMapInput +
      '<div class="contact-grid">' +
        '<div class="contact-info"><h2 class="section-title">Thông tin liên hệ</h2>' + itemsHtml + '</div>' +
        '<div class="contact-map"><h2 class="section-title">Bản đồ</h2>' + mapDisplay + '</div>' +
      '</div></div>';
  }

  // =====================
  // ROUTER
  // =====================
  function getRoute() {
    var hash = location.hash.replace('#', '') || 'trang-chu';
    var parts = hash.split('/');
    return { page: parts[0], sub: parts[1], param: parts[2] };
  }

  function renderPage() {
    var data = Storage.getData();
    var route = getRoute();
    var contentEl = document.getElementById('page-content');

    // Update site header
    var siteNameEl = document.querySelector('.site-name');
    var parentNameEl = document.querySelector('.site-parent-name');
    if (siteNameEl) siteNameEl.textContent = data.site.name;
    if (parentNameEl) parentNameEl.textContent = data.site.parentName;

    // Update logo
    var logoEl = document.querySelector('.site-logo');
    if (logoEl && data.site.logoImage) {
      logoEl.src = data.site.logoImage;
    }

    // Update footer dynamically
    var footerName = document.getElementById('footerName');
    var footerAddr = document.getElementById('footerAddress');
    var footerContact = document.getElementById('footerContact');
    var footerCopy = document.getElementById('footerCopyright');
    if (footerName) footerName.textContent = data.site.name;
    if (footerAddr) footerAddr.textContent = '📍 ' + data.contact.address;
    if (footerContact) footerContact.textContent = '📞 ' + data.contact.phone + ' | 📧 ' + data.contact.email;
    if (footerCopy) footerCopy.textContent = '© 2026 ' + data.site.name + '. Tất cả quyền được bảo lưu.';

    // Render page content
    var html = '';
    switch (route.page) {
      case 'trang-chu': html = renderHomePage(data); break;
      case 'gioi-thieu': html = renderAboutPage(data); break;
      case 'tin-tuc':
        if (route.sub === 'chi-tiet' && route.param) {
          html = renderNewsDetail(data, route.param);
        } else {
          html = renderNewsPage(data);
        }
        break;
      case 'lich-cong-tac': html = renderSchedulePage(data); break;
      case 'van-ban': html = renderDocumentsPage(data); break;
      case 'lien-he': html = renderContactPage(data); break;
      default: html = renderHomePage(data);
    }

    contentEl.innerHTML = html;

    // Update active nav
    var navLinks = document.querySelectorAll('.nav-menu a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
      var href = navLinks[i].getAttribute('href').replace('#', '');
      if (href === route.page || (route.page === '' && href === 'trang-chu')) {
        navLinks[i].classList.add('active');
      }
    }

    // Re-apply edit mode if logged in
    if (Auth.isLoggedIn()) {
      Editor.enable();
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }

  // =====================
  // EDITOR
  // =====================
  var Editor = {
    enable: function() {
      document.body.classList.add('edit-mode');
      document.querySelector('.save-bar').classList.add('show');

      // Enable contenteditable
      var editables = document.querySelectorAll('[data-editable="text"]');
      for (var i = 0; i < editables.length; i++) {
        editables[i].contentEditable = 'true';
      }

      // Setup image change buttons
      var imgBtns = document.querySelectorAll('.btn-change-image');
      for (var j = 0; j < imgBtns.length; j++) {
        (function(btn) {
          btn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            var field = btn.getAttribute('data-image-field');
            Editor.changeImage(field);
          };
        })(imgBtns[j]);
      }
    },

    disable: function() {
      document.body.classList.remove('edit-mode');
      document.querySelector('.save-bar').classList.remove('show');

      var editables = document.querySelectorAll('[data-editable="text"]');
      for (var i = 0; i < editables.length; i++) {
        editables[i].contentEditable = 'false';
      }
    },

    changeImage: function(field) {
      var input = document.getElementById('hiddenFileInput');
      input.setAttribute('data-target-field', field);
      input.click();
    },

    handleImageUpload: function(event) {
      var file = event.target.files[0];
      if (!file) return;

      var field = event.target.getAttribute('data-target-field');
      var reader = new FileReader();

      reader.onload = function(e) {
        var base64 = e.target.result;
        var data = Storage.getData();

        // Parse field path and set value
        var parts = field.split('.');
        if (parts[0] === 'news') {
          var newsId = parseInt(parts[1]);
          for (var i = 0; i < data.news.length; i++) {
            if (data.news[i].id === newsId) {
              data.news[i].image = base64;
              break;
            }
          }
        } else {
          var obj = data;
          for (var k = 0; k < parts.length - 1; k++) {
            obj = obj[parts[k]];
          }
          obj[parts[parts.length - 1]] = base64;
        }

        Storage.saveData(data);
        showNotification('Đã đổi ảnh! Đang cập nhật...');
        renderPage();
      };

      reader.readAsDataURL(file);
      event.target.value = '';
    },

    saveAll: function() {
      var data = Storage.getData();

      // Collect all editable text fields
      var editables = document.querySelectorAll('[data-editable="text"]');
      for (var i = 0; i < editables.length; i++) {
        var el = editables[i];
        var field = el.getAttribute('data-field');
        if (!field) continue;

        var parts = field.split('.');
        var value = el.innerHTML;

        // For simple text fields, use textContent
        if (!el.querySelector('p') && !el.querySelector('br') && !el.querySelector('div')) {
          value = el.textContent;
        }

        // Handle nested paths
        if (parts[0] === 'news') {
          var newsId = parseInt(parts[1]);
          for (var j = 0; j < data.news.length; j++) {
            if (data.news[j].id === newsId) {
              data.news[j][parts[2]] = value;
              break;
            }
          }
        } else if (parts[0] === 'about' && parts[1] === 'values') {
          var idx = parseInt(parts[2]);
          if (data.about.values[idx]) {
            data.about.values[idx][parts[3]] = value;
          }
        } else {
          var obj = data;
          for (var k = 0; k < parts.length - 1; k++) {
            if (!obj[parts[k]]) obj[parts[k]] = {};
            obj = obj[parts[k]];
          }
          obj[parts[parts.length - 1]] = value;
        }
      }

      Storage.saveData(data);
      showNotification('✅ Đã lưu thành công!');
      renderPage();
    },

    cancelEdit: function() {
      renderPage();
      showNotification('Đã hủy thay đổi', 'error');
    }
  };

  // =====================
  // MODAL
  // =====================
  var Modal = {
    show: function(type) {
      var overlay = document.getElementById('modalOverlay');
      var modal = document.getElementById('modalContent');
      var todayStr = new Date().toISOString().split('T')[0];
      var html = '';

      switch (type) {
        case 'news':
          html = '<h3>Thêm bài viết mới</h3>' +
            '<label>Tiêu đề</label><input type="text" id="modalTitle" placeholder="Nhập tiêu đề bài viết">' +
            '<label>Tóm tắt</label><textarea id="modalSummary" placeholder="Nhập tóm tắt ngắn"></textarea>' +
            '<label>Nội dung</label><textarea id="modalContentText" placeholder="Nhập nội dung chi tiết" style="min-height:120px;"></textarea>' +
            '<label>Ngày đăng</label><input type="date" id="modalDate" value="' + todayStr + '">' +
            '<label>Ảnh bài viết</label><input type="file" id="modalImage" accept="image/*">' +
            '<div class="modal-buttons">' +
              '<button class="btn-modal-cancel" onclick="App.hideModal()">Hủy</button>' +
              '<button class="btn-modal-save" onclick="App.saveModal(\'news\')">Thêm bài viết</button></div>';
          break;

        case 'schedule':
          html = '<h3>Thêm lịch công tác</h3>' +
            '<label>Ngày</label><input type="date" id="modalDate" value="' + todayStr + '">' +
            '<label>Giờ</label><input type="time" id="modalTime" value="08:00">' +
            '<label>Nội dung</label><textarea id="modalContentText" placeholder="Nhập nội dung công tác"></textarea>' +
            '<label>Địa điểm</label><input type="text" id="modalLocation" placeholder="Nhập địa điểm">' +
            '<label>Thành phần tham dự</label><input type="text" id="modalPerson" placeholder="Ai tham dự?">' +
            '<div class="modal-buttons">' +
              '<button class="btn-modal-cancel" onclick="App.hideModal()">Hủy</button>' +
              '<button class="btn-modal-save" onclick="App.saveModal(\'schedule\')">Thêm lịch</button></div>';
          break;

        case 'document':
          html = '<h3>Thêm văn bản</h3>' +
            '<label>Loại văn bản</label><select id="modalDocType">' +
              '<option value="QĐ">Quyết định</option><option value="TB">Thông báo</option>' +
              '<option value="CV">Công văn</option><option value="KH">Kế hoạch</option>' +
              '<option value="BC">Báo cáo</option><option value="HD">Hướng dẫn</option></select>' +
            '<label>Số hiệu</label><input type="text" id="modalDocNumber" placeholder="VD: QĐ-01/2026">' +
            '<label>Tiêu đề</label><input type="text" id="modalTitle" placeholder="Nhập tiêu đề văn bản">' +
            '<label>Ngày ban hành</label><input type="date" id="modalDate" value="' + todayStr + '">' +
            '<label>Link tải văn bản (Google Drive, ...)</label><input type="text" id="modalDocLink" placeholder="Dán link tải vào đây, VD: https://drive.google.com/...">' +
            '<div class="modal-buttons">' +
              '<button class="btn-modal-cancel" onclick="App.hideModal()">Hủy</button>' +
              '<button class="btn-modal-save" onclick="App.saveModal(\'document\')">Thêm văn bản</button></div>';
          break;
      }

      modal.innerHTML = html;
      overlay.classList.add('show');
    },

    hide: function() {
      document.getElementById('modalOverlay').classList.remove('show');
    },

    save: function(type) {
      var data = Storage.getData();

      switch (type) {
        case 'news': {
          var title = document.getElementById('modalTitle').value.trim();
          var summary = document.getElementById('modalSummary').value.trim();
          var content = document.getElementById('modalContentText').value.trim();
          var date = document.getElementById('modalDate').value;
          var imageInput = document.getElementById('modalImage');

          if (!title) { showNotification('Vui lòng nhập tiêu đề', 'error'); return; }

          var newItem = { id: generateId(data.news), title: title, summary: summary, content: content, date: date, image: '' };

          if (imageInput && imageInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
              newItem.image = e.target.result;
              data.news.push(newItem);
              Storage.saveData(data);
              Modal.hide();
              showNotification('✅ Đã thêm bài viết!');
              renderPage();
            };
            reader.readAsDataURL(imageInput.files[0]);
            return;
          }

          data.news.push(newItem);
          break;
        }

        case 'schedule': {
          var sDate = document.getElementById('modalDate').value;
          var sTime = document.getElementById('modalTime').value;
          var sContent = document.getElementById('modalContentText').value.trim();
          var sLocation = document.getElementById('modalLocation').value.trim();
          var sPerson = document.getElementById('modalPerson').value.trim();

          if (!sContent) { showNotification('Vui lòng nhập nội dung', 'error'); return; }

          data.schedule.push({ id: generateId(data.schedule), date: sDate, time: sTime, content: sContent, location: sLocation, person: sPerson });
          break;
        }

        case 'document': {
          var dType = document.getElementById('modalDocType').value;
          var dNumber = document.getElementById('modalDocNumber').value.trim();
          var dTitle = document.getElementById('modalTitle').value.trim();
          var dDate = document.getElementById('modalDate').value;
          var dLink = document.getElementById('modalDocLink').value.trim();

          if (!dTitle) { showNotification('Vui lòng nhập tiêu đề', 'error'); return; }

          data.documents.push({ id: generateId(data.documents), title: dTitle, number: dNumber, date: dDate, type: dType, link: dLink });
          break;
        }
      }

      Storage.saveData(data);
      Modal.hide();
      showNotification('✅ Đã thêm thành công!');
      renderPage();
    }
  };

  // =====================
  // DELETE ITEMS
  // =====================
  function deleteItem(type, id) {
    if (!confirm('Bạn có chắc muốn xóa?')) return;
    var data = Storage.getData();

    switch (type) {
      case 'news':
        data.news = data.news.filter(function(n) { return n.id !== id; });
        break;
      case 'schedule':
        data.schedule = data.schedule.filter(function(s) { return s.id !== id; });
        break;
      case 'document':
        data.documents = data.documents.filter(function(d) { return d.id !== id; });
        break;
    }

    Storage.saveData(data);
    showNotification('Đã xóa thành công');
    renderPage();
  }

  // =====================
  // FILTER DOCUMENTS
  // =====================
  function filterDocs() {
    var typeFilter = document.getElementById('docTypeFilter');
    var searchInput = document.getElementById('docSearchInput');
    if (!typeFilter || !searchInput) return;

    var ft = typeFilter.value.toLowerCase();
    var st = searchInput.value.toLowerCase();

    var items = document.querySelectorAll('.doc-item');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var docType = (item.getAttribute('data-doc-type') || '').toLowerCase();
      var titleEl = item.querySelector('.doc-title');
      var metaEl = item.querySelector('.doc-meta');
      var title = titleEl ? titleEl.textContent.toLowerCase() : '';
      var meta = metaEl ? metaEl.textContent.toLowerCase() : '';

      var matchType = !ft || docType === ft;
      var matchSearch = !st || title.indexOf(st) >= 0 || meta.indexOf(st) >= 0;

      item.style.display = (matchType && matchSearch) ? 'flex' : 'none';
    }
  }

  // =====================
  // LOGIN UI
  // =====================
  function setupLoginUI() {
    var loginToggle = document.getElementById('loginToggle');
    var loginPanel = document.getElementById('loginPanel');
    var adminInfo = document.getElementById('adminInfo');
    var loginBtn = document.getElementById('loginBtn');
    var logoutBtn = document.getElementById('logoutBtn');
    var loginError = document.getElementById('loginError');

    loginToggle.onclick = function() {
      if (Auth.isLoggedIn()) {
        adminInfo.classList.toggle('show');
        loginPanel.classList.remove('show');
      } else {
        loginPanel.classList.toggle('show');
        adminInfo.classList.remove('show');
      }
    };

    // Close panels when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.login-box')) {
        loginPanel.classList.remove('show');
        adminInfo.classList.remove('show');
      }
    });

    loginBtn.onclick = function() {
      var username = document.getElementById('loginUsername').value;
      var password = document.getElementById('loginPassword').value;

      if (Auth.login(username, password)) {
        loginPanel.classList.remove('show');
        loginError.style.display = 'none';
        loginToggle.innerHTML = '👤';
        loginToggle.style.background = '#27ae60';
        Editor.enable();
        showNotification('Đăng nhập thành công! Bạn có thể chỉnh sửa nội dung.');
        renderPage();
      } else {
        loginError.style.display = 'block';
      }
    };

    // Allow Enter key to login
    document.getElementById('loginPassword').addEventListener('keyup', function(e) {
      if (e.key === 'Enter') loginBtn.click();
    });

    logoutBtn.onclick = function() {
      Auth.logout();
      adminInfo.classList.remove('show');
      loginToggle.innerHTML = '🔑';
      loginToggle.style.background = 'rgba(26, 58, 92, 0.7)';
      Editor.disable();
      showNotification('Đã đăng xuất');
      renderPage();
    };

    // Check if already logged in
    if (Auth.isLoggedIn()) {
      loginToggle.innerHTML = '👤';
      loginToggle.style.background = '#27ae60';
    }
  }

  // =====================
  // INIT
  // =====================
  function init() {
    // Setup file input handler
    document.getElementById('hiddenFileInput').addEventListener('change', Editor.handleImageUpload);

    // Setup login UI
    setupLoginUI();

    // Setup save/cancel buttons
    document.getElementById('btnSave').onclick = function() { Editor.saveAll(); };
    document.getElementById('btnCancelEdit').onclick = function() { Editor.cancelEdit(); };

    // Close modal on overlay click
    document.getElementById('modalOverlay').addEventListener('click', function(e) {
      if (e.target === this) Modal.hide();
    });

    // Listen for hash changes
    window.addEventListener('hashchange', renderPage);

    // Initial render
    renderPage();
  }

  // =====================
  // PUBLIC API
  // =====================
  window.App = {
    showModal: function(type) { Modal.show(type); },
    hideModal: function() { Modal.hide(); },
    saveModal: function(type) { Modal.save(type); },
    deleteItem: deleteItem,
    filterDocs: filterDocs,
    removeBannerImage: function(e) {
      if(e) { e.preventDefault(); e.stopPropagation(); }
      if (!confirm('Bạn có chắc muốn xóa ảnh nền và dùng màu trơn?')) return;
      var data = Storage.getData();
      data.site.bannerImage = '';
      Storage.saveData(data);
      showNotification('Đã xóa ảnh nền');
      renderPage();
    },
    changeBannerColor: function(color) {
      var data = Storage.getData();
      data.site.bannerColor = color;
      Storage.saveData(data);
      showNotification('Đã cập nhật màu nền');
      renderPage();
    },
    saveMapLink: function() {
      var input = document.getElementById('mapLinkInput');
      if (!input) return;
      var link = input.value.trim();
      var data = Storage.getData();
      data.contact.mapIframe = link;
      Storage.saveData(data);
      showNotification(link ? '✅ Đã cập nhật Bản đồ!' : 'Đã xóa bản đồ');
      renderPage();
    },
    removeMapLink: function() {
      var data = Storage.getData();
      data.contact.mapIframe = '';
      Storage.saveData(data);
      showNotification('Đã xóa bản đồ');
      renderPage();
    },
    saveGCalLink: function() {
      var input = document.getElementById('gcalLinkInput');
      if (!input) return;
      var link = input.value.trim();
      var data = Storage.getData();
      data.site.googleCalendarLink = link;
      Storage.saveData(data);
      showNotification(link ? '✅ Đã cập nhật Google Calendar!' : 'Đã xóa link Google Calendar');
      renderPage();
    },
    removeGCalLink: function() {
      var data = Storage.getData();
      data.site.googleCalendarLink = '';
      Storage.saveData(data);
      showNotification('Đã xóa Google Calendar');
      renderPage();
    },
    resetData: function() {
      if (confirm('Bạn có chắc muốn khôi phục dữ liệu gốc? Tất cả thay đổi sẽ bị mất!')) {
        Storage.resetData();
        showNotification('Đã khôi phục dữ liệu gốc');
        renderPage();
      }
    },
    exportAppJs: function() {
      if (!confirm('Tính năng này sẽ tạo ra file app.js chứa toàn bộ dữ liệu bạn đã sửa để bạn ghi đè lên file cũ và đưa lên GitHub. Bạn có muốn tiếp tục?')) return;
      
      showNotification('Đang tạo file...', 'info');
      
      fetch('app.js')
        .then(function(res) { return res.text(); })
        .then(function(text) {
          var currentData = Storage.getData();
          var dataString = JSON.stringify(currentData, null, 2);
          
          // Regex to replace DEFAULT_DATA block
          // Matches from "const DEFAULT_DATA = {" up to the next section "// ====================="
          var regex = /(const\s+DEFAULT_DATA\s*=\s*\{)[\s\S]*?(};\s*\n\s*\/\/\s*=====================)/;
          var replacement = '$1\n' + dataString.substring(1, dataString.length - 1) + '$2';
          
          var newAppJs = text.replace(regex, replacement);
          
          if (newAppJs === text) {
            alert('Không thể tạo file tự động. Bạn vui lòng chụp màn hình báo lỗi này cho kỹ thuật.');
            return;
          }
          
          var blob = new Blob([newAppJs], { type: 'application/javascript;charset=utf-8' });
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'app.js';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          showNotification('✅ Đã tải file app.js! Hãy ghi đè file này vào thư mục của bạn rồi up lên GitHub.');
        })
        .catch(function(err) {
          alert('Lỗi khi tải file: ' + err.message);
        });
    }
  };

  // Start app when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
