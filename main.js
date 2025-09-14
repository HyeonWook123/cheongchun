// 설정 데이터 로드 및 DOM 조작
(function() {
  'use strict';
  
  // DOM이 로드된 후 실행
  document.addEventListener('DOMContentLoaded', function() {
    const config = window.__SITE_CONFIG__;
    
    if (!config) {
      console.error('설정 파일을 찾을 수 없습니다. config.js를 확인해주세요.');
      return;
    }
    
    // 1. 브랜드명 설정
    document.title = `${config.brandName} - 군 복무 청년 취업 전문 상담`;
    const logoImg = document.getElementById('logo-img');
    if (logoImg) logoImg.alt = config.brandName;
    
    // 2. 히어로 섹션 렌더링
    renderHero();
    
    // 3. 가격 카드 렌더링
    renderPricing();
    
    // 4. 증빙 슬라이더 렌더링
    renderProofSlider();
    
    // 5. 카카오 배너 렌더링
    renderKakaoBanner();
    
    // 6. 3가지 특징 렌더링
    renderFeatures3();
    
    // 7. 소개 섹션 렌더링
    renderAbout();
    
    // 8. FAQ 렌더링
    renderFAQ();
    
    // 9. 콘텐츠 그리드 렌더링
    renderContents();
    
    // 10. 진행 단계 렌더링
    renderSteps();
    
    // 11. 최종 CTA 렌더링
    renderFinalCTA();
    
    // 12. 푸터 렌더링
    renderFooter();
    
    // 13. 카카오 CTA 링크 설정
    setupKakaoLinks();
    
    // 14. 카카오 공식 위젯 설정 (옵션)
    setupKakaoWidget();
    
    // 15. 모바일 메뉴 토글
    setupMobileMenu();
    
    // 16. 이미지 지연 로딩
    setupLazyLoading();
    
    // 히어로 섹션 렌더링
    function renderHero() {
      const headline = document.getElementById('hero-headline');
      const subcopy = document.getElementById('hero-subcopy');
      const image = document.getElementById('hero-image');
      const badges = document.getElementById('hero-badges');
      
      if (headline) headline.textContent = config.hero.headline;
      if (subcopy) subcopy.textContent = config.hero.subcopy;
      if (image) {
        image.src = config.hero.image;
        image.alt = config.hero.headline;
      }
      
      if (badges && config.hero.badges) {
        badges.innerHTML = config.hero.badges.map(badge => 
          `<span class="hero-badge">${badge}</span>`
        ).join('');
      }
    }
    
    // 가격 카드 렌더링
    function renderPricing() {
      const grid = document.getElementById('pricing-grid');
      if (!grid) return;
      
      grid.innerHTML = config.pricing.map(item => `
        <div class="pricing-card ${item.popular ? 'popular' : ''}">
          ${item.popular ? '<span class="pricing-badge">인기</span>' : ''}
          <h3 class="pricing-title">${item.title}</h3>
          <div class="pricing-price">
            ${item.price}
            <span class="pricing-unit">${item.unit}</span>
          </div>
          <ul class="pricing-features">
            ${item.features.map(feature => 
              `<li class="pricing-feature">${feature}</li>`
            ).join('')}
          </ul>
          <a href="#" class="btn btn-primary btn-block js-kakao-cta">${item.cta}</a>
        </div>
      `).join('');
    }
    
    // 증빙 슬라이더 렌더링
    function renderProofSlider() {
      const title = document.getElementById('proof-title');
      const subtitle = document.getElementById('proof-subtitle');
      const container = document.getElementById('slider-container');
      const dots = document.getElementById('slider-dots');
      
      if (title) title.textContent = config.proofs.title;
      if (subtitle) subtitle.textContent = config.proofs.subtitle;
      
      if (container) {
        container.innerHTML = config.proofs.images.map((img, index) => `
          <div class="slider-slide">
            <img src="${img}" alt="증빙 자료 ${index + 1}" loading="lazy">
          </div>
        `).join('');
      }
      
      if (dots) {
        dots.innerHTML = config.proofs.images.map((_, index) => `
          <span class="slider-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
        `).join('');
      }
      
      // 슬라이더 기능 설정
      setupSlider();
    }
    
    // 슬라이더 기능
    function setupSlider() {
      const container = document.getElementById('slider-container');
      const prevBtn = document.getElementById('slider-prev');
      const nextBtn = document.getElementById('slider-next');
      const dots = document.querySelectorAll('.slider-dot');
      
      if (!container) return;
      
      let currentSlide = 0;
      const totalSlides = config.proofs.images.length;
      const slidesPerView = 3; // 한 번에 보이는 슬라이드 수
      const slideWidth = 33.333 + 0.7; // 각 슬라이드의 너비 + gap 보정
      const maxSlide = totalSlides - slidesPerView + 1; // 4개 이미지면 2번 이동 가능
      
      function goToSlide(index) {
        currentSlide = Math.min(Math.max(0, index), maxSlide);
        container.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        
        // 도트 업데이트
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentSlide);
        });
      }
      
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentSlide = Math.max(0, currentSlide - 1);
          goToSlide(currentSlide);
        });
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentSlide = Math.min(maxSlide, currentSlide + 1);
          goToSlide(currentSlide);
        });
      }
      
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
      });
      
      // 자동 슬라이드 (3초마다, 한 장씩 이동)
      setInterval(() => {
        if (currentSlide >= maxSlide) {
          currentSlide = 0; // 마지막에 도달하면 처음으로
        } else {
          currentSlide++;
        }
        goToSlide(currentSlide);
      }, 3000);
    }
    
    // 카카오 배너 렌더링
    function renderKakaoBanner() {
      const title = document.getElementById('kakao-banner-title');
      const caption = document.getElementById('kakao-banner-caption');
      const cta = document.getElementById('kakao-banner-cta');
      const phoneMock = document.getElementById('kakao-phone-mock');
      
      if (title) title.textContent = config.kakaoBanner.title;
      if (caption) caption.textContent = config.kakaoBanner.caption;
      if (cta) cta.textContent = config.kakaoBanner.cta;
      if (phoneMock) {
        phoneMock.src = config.kakaoBanner.phoneMock;
        phoneMock.alt = config.kakaoBanner.title;
      }
    }
    
    // 3가지 특징 렌더링
    function renderFeatures3() {
      const grid = document.getElementById('features3-grid');
      if (!grid) return;
      
      grid.innerHTML = config.features3.map(feature => `
        <div class="feature3-card">
          <div class="feature3-icon">${feature.icon}</div>
          <h3 class="feature3-title">${feature.title}</h3>
          <p class="feature3-text">${feature.text}</p>
        </div>
      `).join('');
    }
    
    // 소개 섹션 렌더링
    function renderAbout() {
      const title = document.getElementById('about-title');
      const text = document.getElementById('about-text');
      const image = document.getElementById('about-image');
      const stats = document.getElementById('about-stats');
      
      if (title) title.textContent = config.about.title;
      if (text) text.textContent = config.about.text;
      if (image) {
        image.src = config.about.image;
        image.alt = config.about.title;
      }
      
      if (stats && config.about.stats) {
        stats.innerHTML = config.about.stats.map(stat => `
          <div class="about-stat">
            <span class="about-stat-number">${stat.number}</span>
            <span class="about-stat-label">${stat.label}</span>
          </div>
        `).join('');
      }
    }
    
    // FAQ 렌더링
    function renderFAQ() {
      const list = document.getElementById('faq-list');
      if (!list) return;
      
      list.innerHTML = config.faq.map((item, index) => `
        <div class="faq-item" data-index="${index}">
          <div class="faq-question">${item.q}</div>
          <div class="faq-answer">${item.a}</div>
        </div>
      `).join('');
      
      // FAQ 아코디언 기능
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
          // 다른 항목 닫기 (단일 열림 모드)
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
          // 현재 항목 토글
          item.classList.toggle('active');
        });
      });
    }
    
    // 콘텐츠 그리드 렌더링
    function renderContents() {
      const grid = document.getElementById('contents-grid');
      if (!grid) return;
      
      grid.innerHTML = config.contents.map(content => `
        <div class="content-card">
          <span class="content-badge" style="background: ${content.badgeColor || '#007bff'}">
            ${content.badge}
          </span>
          <h3 class="content-title">${content.title}</h3>
          <p class="content-text">${content.text}</p>
        </div>
      `).join('');
    }
    
    // 진행 단계 렌더링
    function renderSteps() {
      const timeline = document.getElementById('steps-timeline');
      if (!timeline) return;
      
      timeline.innerHTML = config.steps.map(step => `
        <div class="step-item">
          <div class="step-number">${step.number}</div>
          <div class="step-icon">${step.icon}</div>
          <h3 class="step-title">${step.title}</h3>
          <p class="step-text">${step.text}</p>
        </div>
      `).join('');
    }
    
    // 최종 CTA 렌더링
    function renderFinalCTA() {
      const title = document.getElementById('final-cta-title');
      const subtitle = document.getElementById('final-cta-subtitle');
      const button = document.getElementById('final-cta-button');
      
      if (title) title.textContent = config.finalCTA.title;
      if (subtitle) subtitle.textContent = config.finalCTA.subtitle;
      if (button) button.textContent = config.finalCTA.buttonText;
    }
    
    // 푸터 렌더링
    function renderFooter() {
      const brand = document.getElementById('footer-brand');
      const address = document.getElementById('footer-address');
      const reg = document.getElementById('footer-reg');
      const ceo = document.getElementById('footer-ceo');
      const copyright = document.getElementById('footer-copyright');
      const links = document.getElementById('footer-links');
      
      if (brand) brand.textContent = config.footer.bizName;
      if (address) address.textContent = config.footer.address;
      if (reg) reg.textContent = config.footer.reg;
      if (ceo) ceo.textContent = config.footer.ceo;
      if (copyright) copyright.textContent = config.footer.copyright;
      
      if (links && config.footer.links) {
        links.innerHTML = config.footer.links.map(link => 
          `<a href="${link.url}">${link.text}</a>`
        ).join('');
      }
    }
    
    // 카카오 CTA 링크 설정
    function setupKakaoLinks() {
      const kakaoButtons = document.querySelectorAll('.js-kakao-cta');
      
      kakaoButtons.forEach(button => {
        // 공식 위젯이 활성화되지 않은 경우 링크로 동작
        if (!config.kakaoAppKey || !config.kakaoChannelPublicId) {
          button.href = config.kakaoChannelUrl;
          button.target = '_blank';
          button.rel = 'noopener noreferrer';
        }
      });
    }
    
    // 카카오 공식 위젯 설정 (선택사항)
    function setupKakaoWidget() {
      // 앱 키와 채널 ID가 있는 경우에만 실행
      if (!config.kakaoAppKey || !config.kakaoChannelPublicId) {
        return;
      }
      
      // 카카오 SDK 동적 로드
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
      script.onload = function() {
        // SDK 초기화
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init(config.kakaoAppKey);
          
          // 플로팅 버튼에 채팅 버튼 생성
          const floatingBtn = document.getElementById('kakao-floating');
          if (floatingBtn) {
            // 기존 내용 제거
            floatingBtn.innerHTML = '';
            
            // 공식 채팅 버튼 생성
            window.Kakao.Channel.createChatButton({
              container: '#kakao-floating',
              channelPublicId: config.kakaoChannelPublicId,
              title: 'consult',
              size: 'large',
              color: 'yellow',
              shape: 'pc',
              floating: false
            });
          }
          
          // 모든 CTA 버튼 클릭 시 채팅 창 열기
          const kakaoButtons = document.querySelectorAll('.js-kakao-cta');
          kakaoButtons.forEach(button => {
            button.addEventListener('click', function(e) {
              e.preventDefault();
              window.Kakao.Channel.chat({
                channelPublicId: config.kakaoChannelPublicId
              });
            });
          });
        }
      };
      document.head.appendChild(script);
    }
    
    // 모바일 메뉴 토글
    function setupMobileMenu() {
      const toggle = document.getElementById('nav-toggle');
      const menu = document.getElementById('nav-menu');
      
      if (toggle && menu) {
        toggle.addEventListener('click', () => {
          menu.classList.toggle('active');
          toggle.classList.toggle('active');
        });
        
        // 메뉴 항목 클릭 시 메뉴 닫기
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
          link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
          });
        });
      }
    }
    
    // 이미지 지연 로딩 (네이티브 lazy loading을 지원하지 않는 브라우저용)
    function setupLazyLoading() {
      if ('loading' in HTMLImageElement.prototype) {
        // 브라우저가 네이티브 lazy loading을 지원함
        return;
      }
      
      // Intersection Observer를 사용한 폴백
      const images = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src;
            img.removeAttribute('loading');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    }
    
    // 부드러운 스크롤 (폴백)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
})();