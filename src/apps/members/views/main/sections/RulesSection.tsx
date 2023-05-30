import { Colors } from "@/common/theme";
import { RulesItemsType } from "@/types/common.type";
import { css } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import download from "@/assets/icons/download.png";
import Image from "next/image";
import parse from "html-react-parser";

type RulesSectionType = {
  RulesRef: React.RefObject<HTMLDivElement>;
};

export const RulesSection = ({ RulesRef }: RulesSectionType) => {
  const { t } = useTranslation("rules");
  const items: RulesItemsType[] = t("items", { returnObjects: true });
  return (
    <div css={st.root} ref={RulesRef}>
      <Typography
        color={Colors.common.black}
        textAlign="center"
        fontSize="2.917vw"
        mb="2.719vw"
      >
        {t("title")}
      </Typography>
      <Stack direction="row" spacing={"2.083vw"} css={st.items}>
        {items.map((it, index) => (
          <Stack key={index} css={st.item}>
            <Typography css={st.card_title(it.title.color)}>
              {parse(it.title.text)}
            </Typography>
            <Stack spacing="4.167vw" css={st.card}>
              {it.card.map((list, index) => (
                <div key={index}>
                  <Typography
                    variant="h6"
                    color={Colors.common.black}
                    textAlign="center"
                  >
                    {list.rule}
                  </Typography>
                  <Typography
                    mt="1.042vw"
                    color={Colors.common.black}
                    variant="body1"
                    fontWeight={400}
                    textAlign="center"
                  >
                    {list.footnote}
                  </Typography>
                </div>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
      <div css={st.footnote}>
        <Typography
          pl="0.833vw"
          color={Colors.common.black}
          variant="subtitle1"
        >
          {t("footnote")}
        </Typography>
      </div>
      <div css={st.buttonWrap}>
        <Button css={st.button}>
          <div css={st.download}>
            <Image src={download} alt="download" fill />
          </div>
          <Typography
            color={Colors.common.white}
            variant="subtitle2"
            fontWeight={700}
          >
            {t("download")}
          </Typography>
        </Button>
      </div>
    </div>
  );
};

const st = {
  root: css`
    padding: 10.417vw 8.333vw;
    width: 100%;
    background: #f9f9f9;
    & .underline {
      text-decoration: underline;
      text-underline-position: under;
    }
  `,
  items: css`
    width: 100%;
    align-items: stretch;
  `,
  item: css`
    width: 100%;
    align-items: center;
  `,
  card_title: (bgColor: string) => css`
    background: ${bgColor};
    min-width: 30.208vw;
    height: 7.396vw;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.875vw 1.5vw;
    color: #fff;
    font-size: 2.604vw;
    text-align: center;
    border-radius: 5.208vw;
    transform: translateY(4vw);
  `,
  card: css`
    padding: 7.292vw 0;
    align-items: center;
    box-shadow: 0vw 0.156vw 0.313vw rgba(0, 0, 0, 0.16);
    border-radius: 1.042vw;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  `,
  footnote: css`
    list-style: square;
    margin: 3.646vw 0 10.417vw 0;
    display: flex;
    &::before {
      content: "*";
      font-size: 1.771vw;
      font-weight: 700;
      padding-top: 1vw;
    }
  `,
  buttonWrap: css`
    display: flex;
    justify-content: center;
  `,
  button: css`
    background: #000;
    padding: 0 2.917vw;
    height: 4.792vw;
    display: flex;
    gap: 0.521vw;
    border-radius: 0.938vw;
    &:hover {
      background: #000;
    }
  `,
  download: css`
    position: relative;
    width: 1.875vw;
    height: 1.875vw;
  `,
};
