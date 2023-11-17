import { useEffect } from "react";
import Header from "../Components/Header";
import Section from "../Components/Section/Section";
import GroupVoteButtons from "../Components/UI/Buttons/VoteButtons/GroupVoteButtons";
import NavBar from "../Components/NavBar";
import Loader from "../Components/UI/Loader/Loader";
import useFetch from "../Hooks/useFetch";
import { useRecoilValue, useRecoilState } from "recoil";
import { isLoading$, actionInfoArray$, errorMessage$ } from "../Recoil/atoms";
import { voteResponseData$ } from "../Recoil/selectors";
import BlockActionInfo from "../Components/BlockActionInfo/BlockActionInfo";
import { BlackText } from "../Components/UI/Texts/BlackText";
import { RectButton } from "../Components/UI/Buttons/RectButton";

const Voting = () => {
  const { getRandomCat } = useFetch();

  const isLoading = useRecoilValue(isLoading$);
  const voteResponseData = useRecoilValue(voteResponseData$);
  const [actionInfoArray, setActionInfoArray] =
    useRecoilState(actionInfoArray$);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessage$);

  useEffect(() => {
    getRandomCat();
    return () => {
      setErrorMessage("");
    };
  }, []);

  return (
    <>
      <NavBar />
      <Section>
        <Header class_name="title title_button" title_content="VOTING">
          <RectButton
            id="clear_log"
            class_name="rect_btn title"
            onClick={() => setActionInfoArray([])}
          >
            Clear log
          </RectButton>
        </Header>
        {isLoading ? (
          <Loader />
        ) : errorMessage !== "" ? (
          <h3 style={{ textAlign: "center", marginTop: 50 }}>
            <BlackText>{errorMessage}</BlackText>
          </h3>
        ) : (
          voteResponseData && (
            <div>
              <img
                src={voteResponseData.url}
                alt="cat"
                // className="voting_img"
                style={{
                  width: "100%",
                  maxHeight: "740px",
                  borderRadius: "20px",
                }}
              />
              <GroupVoteButtons />
              {actionInfoArray.map((block, ind) => (
                <div key={ind}>
                  <BlockActionInfo
                    message={block.message}
                    icon={block.icon}
                    date={block.date}
                  >
                    {block.id}
                  </BlockActionInfo>
                </div>
              ))}
            </div>
          )
        )}
      </Section>
    </>
  );
};

export default Voting;
