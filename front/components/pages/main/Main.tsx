import { useState } from "react";
import { MainPageContent } from "./main.styles";
import { TabHead } from "../../tabHead";
import { useTranslation, Trans } from "next-i18next";
import { MainSearch } from "../../mainSearch";

export const Main = () => {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<MainPageContent>
			<div className="search-container">
				<MainSearch />
			</div>
			<h2>{t("mainPage.contentTitle")}</h2>
			<p className="main-description">
				{t("mainPage.contentDescription")}
			</p>
			<div className="tab-headers">
				<TabHead
					className={`${activeTab === 0 && "active-tab"}`}
					title={t("mainPage.tabs.tab1-header")}
					onClick={() => setActiveTab(0)}
				/>
				<TabHead
					className={`${activeTab === 1 && "active-tab"}`}
					title={t("mainPage.tabs.tab2-header")}
					onClick={() => setActiveTab(1)}
				/>
				<TabHead
					className={`${activeTab === 2 && "active-tab"}`}
					title={t("mainPage.tabs.tab3-header")}
					onClick={() => setActiveTab(2)}
				/>
				<TabHead
					className={`${activeTab === 3 && "active-tab"}`}
					title={t("mainPage.tabs.tab4-header")}
					onClick={() => setActiveTab(3)}
				/>
				<TabHead
					className={`${activeTab === 4 && "active-tab"}`}
					title={t("mainPage.tabs.tab5-header")}
					onClick={() => setActiveTab(4)}
				/>
			</div>
			<div className="tab-contents">
				<Trans
					i18nKey={`mainPage.tabs.tab${activeTab + 1}-content`}
					components={{ span: <span /> }}
				/>
				{activeTab === 4 && (
					<ul className="additional-tab-list">
						<li>{t("mainPage.tabs.list-item1")}</li>
						<li>{t("mainPage.tabs.list-item2")}</li>
						<li>{t("mainPage.tabs.list-item3")}</li>
						<li>{t("mainPage.tabs.list-item4")}</li>
					</ul>
				)}
			</div>
		</MainPageContent>
	);
};
