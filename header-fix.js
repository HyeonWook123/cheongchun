// 헤더와 서브네비 위치 동적 조정
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const subNav = document.querySelector('.sub-nav');
    const body = document.body;

    if (header && subNav) {
        // 헤더 높이를 실시간으로 계산
        function adjustPositions() {
            const headerHeight = header.offsetHeight;
            const subNavHeight = subNav.offsetHeight;

            // 서브네비를 헤더 바로 아래에 위치
            subNav.style.top = headerHeight + 'px';

            // body 패딩 조정
            body.style.paddingTop = (headerHeight + subNavHeight) + 'px';

            // 스크롤 패딩 조정
            document.documentElement.style.scrollPaddingTop = (headerHeight + subNavHeight) + 'px';
        }

        // 초기 실행
        adjustPositions();

        // 윈도우 리사이즈 시 재계산
        window.addEventListener('resize', adjustPositions);

        // 폰트 로딩 완료 시 재계산
        if (document.fonts) {
            document.fonts.ready.then(adjustPositions);
        }
    }
});