import { http, HttpResponse } from 'msw';

export const handlers = [
  // http.get('/', () => {
  //   return HttpResponse.json({ name: 'John' });
  // }),

  http.get('/', () => {
    return HttpResponse.json([
      {
        id: 1,
        author: '황수재',
        title: '드래그 앤 드롭은 사실 편한 UX가 아니다?',
        createdAt: new Date('2024-05-30'),
        summary:
          '드래그 앤 드롭은 장애를 가진 사용자에게는 불편한 UX가 되기도 해요. 오늘은 “나눠모으기 통장” 서비스의 접근성 설계 단계부터 개발 과정까지 소개하고 접근성을 챙길 수 있는 간단한 방법을 알려드릴게요.',
      },
      {
        id: 2,
        author: '강현구',
        title: 'Transpiler, “사용”말고 “활용”하기',
        createdAt: new Date('2024-05-24'),
        summary:
          '매일 “사용”만 하는 transpiler, 토스뱅크에서는 한 단계 더 잘 “활용”해 보기로 했어요. 오늘은 transpiler로 로깅 과정을 개선한 사례를 소개 드릴게요.',
      },
      {
        id: 3,
        author: '박서진',
        title: '패키지 매니저의 과거, 토스의 선택, 그리고 미래',
        createdAt: new Date('2024-05-23'),
        summary:
          '토스는 왜 패키지 매니저로 Yarn을 선택했을까요? 이번 라이트닝 토크에서는 JavaScript의 패키지 매니저, 동작 방식, 그리고 토스의 선택과 앞으로의 방향성에 대해 이야기해 보려고 해요.',
      },
      {
        id: 4,
        author: '함종현',
        title: '서버 증설 없이 처리하는 대규모 트래픽',
        createdAt: new Date('2024-05-13'),
        summary:
          '늘어나는 트래픽을 잘 처리하기 위해 서버 개발자는 어떤 고민을 해야 할까요? “라이브 쇼핑 보기” 서비스에 대규모 트래픽이 들어오면서 겪은 문제와 해결책을 공유드려요.',
      },
      {
        id: 5,
        author: '황희영',
        title: '제품이 커지면 디자인 시스템 가이드는 어떻게 개선돼야 할까?',
        createdAt: new Date('2024-04-05'),
        summary:
          '디자인 시스템을 운영하면서, 컴포넌트의 유려함뿐만 아니라 가이드의 효율적인 제작도 중요하다는 것을 깨달았어요. 이번 아티클에서는 TDS 컴포넌트 가이드를 제작 할 때 어떤 부분들을 고려해서 만들어가고 있는지 소개해드릴게요.',
      },
    ]);
  }),
];
