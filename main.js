// 청춘도약일자리교육원 - 메인 스크립트
(function() {
  'use strict';

  // DOM 로드 완료 후 실행
  document.addEventListener('DOMContentLoaded', function() {
    // 설정 확인
    if (typeof window.__SITE_CONFIG__ === 'undefined') {
      console.error('Site configuration not loaded');
      return;
    }

    const config = window.__SITE_CONFIG__;

    // 1. 히어로 섹션 렌더링
    renderHeroSection();

    // 2. 자가진단 섹션 렌더링
    renderSelfDiagnosis();

    // 3. 서류 샘플 섹션 렌더링
    renderDocumentSamples();

    // 4. 프로세스 가이드 렌더링
    renderProcessGuide();

    // 5. 기존 증빙 슬라이더 렌더링
    renderProofSlider();

    // 6. 후기 섹션 렌더링
    renderReviewsSection();

    // 7. 가격 섹션 렌더링
    renderPricingSection();

    // 8. 카카오 배너 렌더링
    renderKakaoBanner();

    // 9. FAQ 섹션 렌더링
    renderFAQSection();

    // 10. 최종 CTA 렌더링
    renderFinalCTA();

    // 11. 푸터 렌더링
    renderFooter();

    // 12. 카카오 CTA 링크 설정
    setupKakaoLinks();

    // 13. 카카오 공식 위젯 설정 (옵션)
    setupKakaoWidget();

    // 14. 모바일 메뉴 토글
    setupMobileMenu();

    // 15. 이미지 지연 로딩
    setupLazyLoading();

    // 16. 스크롤 애니메이션
    setupScrollAnimations();

    console.log('청춘도약일자리교육원 웹사이트 로드 완료');
  });

  // 히어로 섹션 렌더링
  function renderHeroSection() {
    const tagline = document.getElementById('hero-tagline');
    const headline = document.getElementById('hero-headline');
    const subcopy = document.getElementById('hero-subcopy');
    const primaryCta = document.getElementById('hero-primary-cta');
    const secondaryCta = document.getElementById('hero-secondary-cta');
    const badges = document.getElementById('hero-badges');
    const image = document.getElementById('hero-image');

    if (tagline) tagline.textContent = config.tagline;
    if (headline) headline.textContent = config.hero.headline;
    if (subcopy) subcopy.textContent = config.hero.subcopy;
    if (primaryCta) primaryCta.textContent = config.hero.primaryCta;
    if (secondaryCta) secondaryCta.textContent = config.hero.secondaryCta;

    if (badges && config.hero.badges) {
      badges.innerHTML = config.hero.badges.map(badge =>
        `<span class="hero-badge">${badge}</span>`
      ).join('');
    }

    if (image) {
      image.src = config.hero.image;
      image.alt = config.hero.headline;
    }
  }

  // 자가진단 섹션 렌더링
  function renderSelfDiagnosis() {
    const title = document.getElementById('diagnosis-title');
    const subtitle = document.getElementById('diagnosis-subtitle');
    const categories = document.getElementById('diagnosis-categories');
    const questions = document.getElementById('diagnosis-questions');
    const resultTitle = document.getElementById('result-title');
    const resultSubtitle = document.getElementById('result-subtitle');
    const resultCta = document.getElementById('result-cta');

    if (title) title.textContent = config.selfDiagnosis.title;
    if (subtitle) subtitle.textContent = config.selfDiagnosis.subtitle;

    // 카테고리 탭 렌더링
    if (categories && config.selfDiagnosis.categories) {
      categories.innerHTML = config.selfDiagnosis.categories.map(category => `
        <button class="diagnosis-category ${category.active ? 'active' : ''}" data-category="${category.id}">
          <span class="category-icon">${category.icon}</span>
          <span class="category-title">${category.title}</span>
        </button>
      `).join('');

      // 카테고리 클릭 이벤트
      categories.addEventListener('click', function(e) {
        const categoryBtn = e.target.closest('.diagnosis-category');
        if (categoryBtn) {
          // 모든 카테고리 비활성화
          categories.querySelectorAll('.diagnosis-category').forEach(btn =>
            btn.classList.remove('active')
          );
          // 클릭된 카테고리 활성화
          categoryBtn.classList.add('active');
        }
      });
    }

    // 진단 질문 단계별 렌더링
    let currentQuestionIndex = 0;
    const totalQuestions = config.selfDiagnosis.form.questions.length;
    const userAnswers = {};

    function renderCurrentQuestion() {
      if (questions && config.selfDiagnosis.form.questions) {
        const question = config.selfDiagnosis.form.questions[currentQuestionIndex];

        questions.innerHTML = `
          <div class="diagnosis-question active">
            <div class="question-progress">
              <span class="progress-text">${currentQuestionIndex + 1} / ${totalQuestions}</span>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${((currentQuestionIndex + 1) / totalQuestions) * 100}%"></div>
              </div>
            </div>
            <h4 class="question-title">${question.title}</h4>
            <div class="question-options">
              ${question.options.map((option, optionIndex) => `
                <label class="option-label">
                  <input type="radio" name="current_question" value="${optionIndex}" required>
                  <span class="option-text">${option}</span>
                </label>
              `).join('')}
            </div>
            ${currentQuestionIndex > 0 ? `
            <div class="question-navigation">
              <button type="button" class="btn btn-outline prev-question">이전</button>
            </div>` : ''}
          </div>
        `;

        // 라디오 버튼 선택 이벤트
        const radioButtons = questions.querySelectorAll('input[type="radio"]');
        const prevBtn = questions.querySelector('.prev-question');

        radioButtons.forEach(radio => {
          radio.addEventListener('change', function() {
            if (this.checked) {
              userAnswers[`question_${currentQuestionIndex}`] = this.value;

              // 자동으로 다음 질문으로 진행 (0.8초 딜레이)
              setTimeout(() => {
                if (currentQuestionIndex < totalQuestions - 1) {
                  currentQuestionIndex++;
                  renderCurrentQuestion();
                } else {
                  // 마지막 질문 완료 - 결과 자동 표시
                  showDiagnosisResult();
                }
              }, 800);
            }
          });
        });

        // 이전 버튼 이벤트
        if (prevBtn) {
          prevBtn.addEventListener('click', function() {
            if (currentQuestionIndex > 0) {
              currentQuestionIndex--;
              renderCurrentQuestion();

              // 이전 답변 복원
              const prevAnswer = userAnswers[`question_${currentQuestionIndex}`];
              if (prevAnswer !== undefined) {
                const prevRadio = questions.querySelector(`input[value="${prevAnswer}"]`);
                if (prevRadio) {
                  prevRadio.checked = true;
                }
              }
            }
          });
        }
      }
    }

    function showDiagnosisResult() {
      const form = document.getElementById('diagnosis-form');
      const result = document.getElementById('diagnosis-result');

      if (form && result) {
        form.style.display = 'none';
        result.style.display = 'block';
        result.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // 초기 질문 렌더링
    renderCurrentQuestion();

    // 결과 텍스트 설정
    if (resultTitle) resultTitle.textContent = config.selfDiagnosis.form.result.title;
    if (resultSubtitle) resultSubtitle.textContent = config.selfDiagnosis.form.result.subtitle;
    if (resultCta) resultCta.textContent = config.selfDiagnosis.form.result.cta;

  }

  // 서류 샘플 섹션 렌더링
  function renderDocumentSamples() {
    const title = document.getElementById('documents-title');
    const subtitle = document.getElementById('documents-subtitle');
    const grid = document.getElementById('documents-grid');

    if (title) title.textContent = config.documentSamples.title;
    if (subtitle) subtitle.textContent = config.documentSamples.subtitle;

    if (grid && config.documentSamples.documents) {
      grid.innerHTML = config.documentSamples.documents.map(doc => `
        <div class="document-card">
          <div class="document-image">
            <img src="${doc.image}" alt="${doc.title}" loading="lazy">
            ${doc.sample ? '<div class="sample-overlay">샘플</div>' : ''}
          </div>
          <div class="document-content">
            <h3 class="document-title">${doc.title}</h3>
            <p class="document-description">${doc.description}</p>
            <ul class="document-features">
              ${doc.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn btn-outline document-preview" data-doc="${doc.id}">
              미리보기
            </button>
          </div>
        </div>
      `).join('');

      // 미리보기 버튼 이벤트
      grid.addEventListener('click', function(e) {
        if (e.target.classList.contains('document-preview')) {
          const docId = e.target.dataset.doc;
          // 모달 또는 새 창에서 문서 미리보기 (구현 생략)
          console.log('문서 미리보기:', docId);
        }
      });
    }
  }

  // 프로세스 가이드 렌더링
  function renderProcessGuide() {
    const title = document.getElementById('process-title');
    const subtitle = document.getElementById('process-subtitle');
    const timeline = document.getElementById('process-timeline');

    if (title) title.textContent = config.process.title;
    if (subtitle) subtitle.textContent = config.process.subtitle;

    if (timeline && config.process.steps) {
      timeline.innerHTML = config.process.steps.map((step, index) => `
        <div class="process-step">
          <div class="step-number">${index + 1}</div>
          <div class="step-content">
            <h3 class="step-title">${step.title}</h3>
            <p class="step-description">${step.description}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // 증빙 슬라이더 렌더링 (올바른 3개씩 보이는 로직)
  function renderProofSlider() {
    const title = document.getElementById('proof-title');
    const subtitle = document.getElementById('proof-subtitle');
    const container = document.getElementById('slider-container');
    const dots = document.getElementById('slider-dots');

    if (title) title.textContent = config.proofs.title;
    if (subtitle) subtitle.textContent = config.proofs.subtitle;

    if (container) {
      const images = config.proofs.images; // [1, 2, 3, 4]

      // 완벽한 무한 루프: 시작점과 끝점이 동일하게
      // [1,2,3] → [2,3,4] → [3,4,1] → [4,1,2] → [1,2,3] (다시 처음과 동일)
      const extendedImages = [
        ...images,     // [1, 2, 3, 4]
        images[0],     // [1] - 루프 완성을 위해
        images[1],     // [2] - 루프 완성을 위해
        images[2]      // [3] - 루프 완성을 위해
      ]; // 최종: [1, 2, 3, 4, 1, 2, 3]

      container.innerHTML = extendedImages.map((img, index) => `
        <div class="slider-slide">
          <img src="${img}" alt="증빙 자료" loading="lazy">
        </div>
      `).join('');
    }
  }

  // CSS 애니메이션으로 완전 자동화된 무한 슬라이더
  function setupSlider() {
    const container = document.getElementById('slider-container');

    if (!container) return;

    // 호버 시 애니메이션 일시정지 (사용자 편의성)
    container.addEventListener('mouseenter', () => {
      container.style.animationPlayState = 'paused';
    });

    container.addEventListener('mouseleave', () => {
      container.style.animationPlayState = 'running';
    });
  }

  // 후기 섹션 렌더링
  function renderReviewsSection() {
    const title = document.getElementById('reviews-title');
    const subtitle = document.getElementById('reviews-subtitle');
    const samples = document.getElementById('reviews-samples');
    const ctaBtn = document.getElementById('reviews-cta-btn');

    if (title) title.textContent = config.reviews.title;
    if (subtitle) subtitle.textContent = config.reviews.subtitle;
    if (ctaBtn) ctaBtn.textContent = config.reviews.cta;

    if (samples && config.reviews.samples) {
      samples.innerHTML = config.reviews.samples.map(review => `
        <div class="review-sample">
          <div class="review-header">
            <div class="reviewer-info">
              <span class="reviewer-name">${review.name}</span>
              <span class="reviewer-branch">${review.branch}</span>
            </div>
            <div class="review-rating">
              <span class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
            </div>
          </div>
          <div class="review-text">${review.text}</div>
          <div class="review-date">${review.date}</div>
        </div>
      `).join('');
    }
  }

  // 가격 섹션 렌더링
  function renderPricingSection() {
    const grid = document.getElementById('pricing-grid');

    if (grid && config.pricing) {
      grid.innerHTML = config.pricing.map(item => `
        <div class="pricing-card ${item.popular ? 'popular' : ''}">
          ${item.popular ? '<div class="popular-badge">인기</div>' : ''}
          <div class="pricing-header">
            <h3 class="pricing-title">${item.title}</h3>
            <p class="pricing-subtitle">${item.subtitle}</p>
            <div class="pricing-price">
              <span class="price-amount">${item.price.toLocaleString()}</span>
              <span class="price-unit">${item.unit}</span>
            </div>
          </div>
          <div class="pricing-content">
            <ul class="pricing-features">
              ${item.features.map(feature =>
                `<li class="pricing-feature">✓ ${feature}</li>`
              ).join('')}
            </ul>
            ${item.limitations && item.limitations.length > 0 ? `
              <ul class="pricing-limitations">
                ${item.limitations.map(limitation =>
                  `<li class="pricing-limitation">• ${limitation}</li>`
                ).join('')}
              </ul>
            ` : ''}
          </div>
          <div class="pricing-footer">
            <a href="#" class="btn btn-primary btn-block js-kakao-cta">${item.cta}</a>
            <p class="pricing-guarantee">${item.guarantee}</p>
          </div>
        </div>
      `).join('');
    }
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

  // FAQ 섹션 렌더링
  function renderFAQSection() {
    const list = document.getElementById('faq-list');

    if (list && config.faq) {
      list.innerHTML = config.faq.map((item, index) => `
        <div class="faq-item">
          <button class="faq-question" data-faq="${index}">
            <span class="faq-q">${item.q}</span>
            <span class="faq-toggle">+</span>
          </button>
          <div class="faq-answer" data-faq="${index}">
            <p>${item.a}</p>
          </div>
        </div>
      `).join('');

      // FAQ 토글 기능
      list.addEventListener('click', function(e) {
        const question = e.target.closest('.faq-question');
        if (question) {
          const index = question.dataset.faq;
          const answer = list.querySelector(`[data-faq="${index}"].faq-answer`);
          const toggle = question.querySelector('.faq-toggle');

          if (answer) {
            const isOpen = answer.classList.contains('open');

            // 모든 FAQ 닫기
            list.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
            list.querySelectorAll('.faq-toggle').forEach(t => t.textContent = '+');

            // 클릭된 FAQ 토글
            if (!isOpen) {
              answer.classList.add('open');
              toggle.textContent = '−';
            }
          }
        }
      });
    }
  }

  // 최종 CTA 렌더링
  function renderFinalCTA() {
    const title = document.getElementById('final-cta-title');
    const subtitle = document.getElementById('final-cta-subtitle');
    const button = document.getElementById('final-cta-button');

    if (title) title.textContent = config.finalCta.title;
    if (subtitle) subtitle.textContent = config.finalCta.subtitle;
    if (button) button.textContent = config.finalCta.cta;
  }

  // 푸터 렌더링
  function renderFooter() {
    const description = document.getElementById('footer-description');
    const phone = document.getElementById('footer-phone');
    const email = document.getElementById('footer-email');
    const address = document.getElementById('footer-address');
    const links = document.getElementById('footer-links');
    const copyright = document.getElementById('footer-copyright');

    if (description) description.textContent = config.footer.description;
    if (phone) phone.textContent = config.contact.phone;
    if (email) email.textContent = config.contact.email;
    if (address) address.textContent = config.contact.address;
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
    const floatingBtn = document.getElementById('kakao-floating');

    kakaoButtons.forEach(button => {
      if (!config.kakaoAppKey || !config.kakaoChannelPublicId) {
        button.href = config.kakaoChannelUrl;
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
      }
    });

    // 플로팅 버튼에도 카카오 링크 연결
    if (floatingBtn && (!config.kakaoAppKey || !config.kakaoChannelPublicId)) {
      floatingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(config.kakaoChannelUrl, '_blank', 'noopener,noreferrer');
      });
    }
  }

  // 카카오 공식 위젯 설정
  function setupKakaoWidget() {
    if (!config.kakaoAppKey || !config.kakaoChannelPublicId) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.onload = function() {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(config.kakaoAppKey);

        const floatingBtn = document.getElementById('kakao-floating');
        if (floatingBtn) {
          floatingBtn.innerHTML = '';
          window.Kakao.Channel.createChatButton({
            container: '#kakao-floating',
            channelPublicId: config.kakaoChannelPublicId,
            title: 'consult',
            size: 'large',
            color: 'yellow',
            shape: 'pc'
          });
        }

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
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (toggle && nav) {
      toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
      });

      // 메뉴 링크 클릭 시 메뉴 닫기
      nav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
          nav.classList.remove('active');
          toggle.classList.remove('active');
        }
      });
    }
  }

  // 이미지 지연 로딩
  function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // 스크롤 애니메이션
  function setupScrollAnimations() {
    if ('IntersectionObserver' in window) {
      const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('.section-header, .pricing-card, .process-step, .document-card').forEach(el => {
        animationObserver.observe(el);
      });
    }
  }
})();