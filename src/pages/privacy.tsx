import { ReactElement } from "react";
import { Layout } from "@components/common";

export default function privacy() {
  return (
    <div className="bg-slate-900">
      <div className="mx-auto pb-24 w-[1280px] min-w-[280px] text-white px-4 pt-10 ">
        <div className="text-20 pb-10">개인정보처리방침</div>
        <p className="mb-4">
          ‘PS Analytics, Inc.&apos;은(는) 개인정보보호법에 따라 이용자의
          개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을
          원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
        </p>{" "}
        <p className="mb-4">
          &apos;PS Analytics, Inc.&apos;은(는) 개인정보처리방침을 개정하는 경우
          웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
        </p>{" "}
        <p className="mb-4">본 방침은 [2020년 10월 16일]부터 시행됩니다.</p>{" "}
        <h2 className="mt-8 mb-4 text-lg font-bold">개인정보의 처리 목적</h2>{" "}
        <p className="mb-2">
          &apos;PS Analytics, Inc.&apos;은(는) 개인정보를 다음의 목적을 위해
          처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지
          않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.
        </p>{" "}
        <ol className="list-decimal pl-8">
          <li className="mb-2">
            <h3 className="mb-1 font-bold">홈페이지 회원가입 및 관리</h3>{" "}
            <p>
              회원 가입의사 확인, 회원자격 유지·관리, 서비스 부정이용 방지, 각종
              고지·통지, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를
              처리합니다.
            </p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-1 font-bold">민원사무 처리</h3>{" "}
            <p>
              민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지,
              처리결과 통보 등을 목적으로 개인정보를 처리합니다.
            </p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-1 font-bold">재화 또는 서비스 제공</h3>{" "}
            <p>서비스 제공, 콘텐츠 제공 등을 목적으로 개인정보를 처리합니다.</p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-1 font-bold">마케팅 및 광고에의 활용</h3>{" "}
            <p>
              신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보
              제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및
              광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스
              이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
            </p>
          </li>
        </ol>{" "}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          개인정보의 처리 및 보유 기간
        </h2>{" "}
        <ol className="list-decimal pl-8">
          <li className="mb-2">
            &apos;PS Analytics, Inc.&apos;은(는) 법령에 따른 개인정보
            보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은
            개인정보 보유·이용기간 내에서 개인정보를 처리, 보유합니다.
          </li>{" "}
          <li className="mb-2">
            각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
            <ol className="mt-2 font-light">
              <li className="mb-2">
                1) 홈페이지 회원가입 및 관리: 홈페이지 탈퇴일로부터 1개월이
                경과하는 날까지. 다만, 관계 법령 위반에 따른 수사, 조사 등이
                진행중인 경우에는 해당 수사, 조사 종료 시까지.
              </li>{" "}
              <li className="mb-2">
                2) 민원사무 처리: 민원사무 처리 완료 시까지.
              </li>{" "}
              <li className="mb-2">
                3) 재화 또는 서비스 제공: 재화·서비스 공급 완료 시까지.
              </li>{" "}
              <li className="mb-2">
                4) 마케팅 및 광고에의 활용: 홈페이지 탈퇴 시까지.
              </li>
            </ol>
          </li>
        </ol>{" "}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          정보주체와 법정대리인의 권리, 의무 및 그 행사방법
        </h2>{" "}
        <p className="mb-2">
          이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
        </p>{" "}
        <ol className="list-decimal pl-8">
          <li className="mb-2">
            정보주체는 &apos;PS Analytics, Inc.&apos;에 대해 언제든지 다음 각
            호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            <ol className="mt-2 font-light">
              <li className="mb-2">1) 개인정보 조회</li>{" "}
              <li className="mb-2">2) 개인정보 수정</li>{" "}
              <li className="mb-2">3) 오류 등이 있을 경우 정정 요구</li>{" "}
              <li className="mb-2">4) 회원 탈퇴</li>
            </ol>
          </li>{" "}
          <li className="mb-2">
            제1항에 따른 권리 행사는 사이트 내의 회원정보 관리 시스템에서
            정보주체가 직접 권리를 행사 할 수 있고, 정보주체의 법정대리인이나
            위임을 받은 자 등 대리인을 통하여도 할 수 있습니다. 이 경우 개인정보
            보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하여야 합니다.
          </li>{" "}
          <li className="mb-2">
            정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
            경우에는 PS Analytics, Inc.은(는) 정정 또는 삭제를 완료할 때까지
            당해 개인정보를 이용하거나 제공하지 않습니다.
          </li>
        </ol>{" "}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          처리하는 개인정보의 항목
        </h2>{" "}
        <p className="mb-2">
          &apos;PS Analytics, Inc.&apos;은(는) 다음의 개인정보 항목을 처리하고
          있습니다.
        </p>{" "}
        <ol className="list-decimal pl-8">
          <li className="mb-2">
            <h3 className="mb-1 font-bold">홈페이지 회원가입 및 관리</h3>{" "}
            <p>수집 정보: 이메일 주소, 닉네임, 비밀번호</p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-1 font-bold">민원사무 처리</h3>{" "}
            <p>수집 정보: 이메일 주소</p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-1 font-bold">재화 또는 서비스 제공</h3>{" "}
            <p>수집 정보: 이메일 주소, 닉네임, 비밀번호</p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-1 font-bold">마케팅 및 광고에의 활용</h3>{" "}
            <p>선택: 이메일 주소</p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-1 font-bold">
              인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어
              기록 및 수집될 수 있습니다.
            </h3>{" "}
            <p>
              접속 IP정보, 쿠키, 접속로그, 서비스 이용기록, 이용제한 기록 등
            </p>
          </li>
        </ol>{" "}
        <h2 className="mt-8 mb-4 text-lg font-bold">개인정보의 파기</h2>{" "}
        <p className="mb-2">
          &apos;PS Analytics, Inc.&apos;은(는) 원칙적으로 개인정보 처리 목적이
          달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한
          및 방법은 다음과 같습니다.
        </p>{" "}
        <ul>
          <li className="mb-2">
            <h3 className="mb-2 font-bold">파기절차</h3>{" "}
            <p>
              이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우
              별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후
              혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한
              경우가 아니고서는 다른 목적으로 이용되지 않습니다.
            </p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-2 font-bold">파기 기한</h3>{" "}
            <p>
              이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는
              보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성,
              해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을
              때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일
              이내에 그 개인정보를 파기합니다.
            </p>{" "}
            <p>
              단, 개인정보의 보유 기간에 대한 정책에 의해 예외적으로 파기가 되지
              않거나 별도의 DB에 옮겨 해당 보유기간까지 보유 할 수 있습니다.
            </p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-2 font-bold">파기 방법</h3>{" "}
            <p>
              &apos;PS Analytics, Inc.&apos;은(는) 전자적 파일 형태로 기록 및
              저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에
              기록, 저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
            </p>
          </li>
        </ul>{" "}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          개인정보 자동 수집 장치의 설치•운영 및 거부
        </h2>{" "}
        <p className="mb-2">
          이용자 개개인에게 개인화되고 맞춤화된 서비스를 제공하기 위해서 회사는
          이용자의 정보를 저장하고 수시로 불러오는 &apos;쿠키(cookie)&apos;를
          사용합니다.
        </p>{" "}
        <p>
          쿠키는 웹사이트를 운영하는데 이용되는 서버가 사용자의 브라우저에게
          보내는 조그마한 데이터 꾸러미로 이용자 컴퓨터의 하드디스크에
          저장됩니다.
        </p>{" "}
        <ul>
          <li className="mb-2">
            <h3 className="mb-2 font-bold">쿠키의 사용 목적</h3>{" "}
            <p>
              회원과 비회원의 접속 빈도나 방문 시간 등의 분석, 이용자의 취향과
              관심분야의 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수
              파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
            </p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-2 font-bold">쿠키 설정 거부 방법</h3>{" "}
            <p>
              이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서,
              이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를
              허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든
              쿠키의 저장을 거부할 수도 있습니다.
            </p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-2 font-bold">
              설정방법 예 (인터넷 익스플로러의 경우)
            </h3>{" "}
            <p>
              웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 (단, 쿠키
              설치를 거부하였을 경우 로그인이 필요한 일부 서비스의 이용이 어려울
              수 있습니다.)
            </p>
          </li>
        </ul>{" "}
        <p>
          <span className="font-bold">
            구글 애널리틱스를 이용한 웹로그 분석
          </span>
        </p>{" "}
        <p>
          회사는 구글(Google)에서 제공하는 웹 분석 도구인 구글 애널리틱스를
          이용하고 있으며, 이 경우 이용자 개인을 식별할 수 없도록 비식별화
          처리된 정보를 이용합니다. 이용자는 구글 애널리틱스 Opt-out Browser
          Add-on 을 이용하거나, 쿠키 설정 거부를 통해 구글 애널리틱스 이용을
          거부할 수 있습니다
        </p>{" "}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          개인정보의 안전성 확보 조치
        </h2>{" "}
        <p className="mb-2">
          &apos;PS Analytics, Inc.&apos;은(는) 개인정보보호법 제29조에 따라
          다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고
          있습니다.
        </p>{" "}
        <ol className="list-decimal pl-8">
          <li className="mb-2">
            <h3 className="mb-2 font-bold">비밀번호의 암호화</h3>{" "}
            <p>
              이용자의 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알
              수 있으며 개인정보의 확인, 변경 및 탈퇴(파기)도 비밀번호를 알고
              있는 본인에 의해서만 가능합니다.
            </p>
          </li>{" "}
          <li className="mb-2">
            <h3 className="mb-2 font-bold">개인정보의 암호화</h3>{" "}
            <p>
              중요한 개인정보는 데이터를 전송 시 암호화하는 등의 별도 보안기능을
              이용하고 있으며, 추가적인 보안문제가 발견될 경우 보안성 확보를
              위해 기술적인 장치를 갖추려고 노력하고 있습니다.
            </p>
          </li>
        </ol>{" "}
        <h2 className="mt-8 mb-4 text-lg font-bold">개인정보 보호책임자</h2>{" "}
        <p className="mb-2">
          &apos;PS Analytics, Inc.&apos;은(는) 개인정보 처리에 관한 업무를
          총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및
          피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
          있습니다.
        </p>{" "}
        <h4 className="my-4 px-4 text-sm font-bold">개인정보 보호 담당 부서</h4>{" "}
        <div className="px-4">
          <p className="mb-2">부서명: 웹개발팀</p>{" "}
          <p className="mb-2">담당자: 박정한</p>{" "}
          <p className="mb-2">연락처: privacy@lol.ps</p>
        </div>{" "}
        <h2 className="mt-8 mb-4 text-lg font-bold">개인정보 처리방침 변경</h2>{" "}
        <p>
          이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
          변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
          전부터 공지사항을 통하여 고지할 것입니다.
        </p>
      </div>
    </div>
  );
}

privacy.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
