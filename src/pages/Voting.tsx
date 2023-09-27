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

const Voting = () => {
  const { getRequest } = useFetch("https://api.thecatapi.com/v1/images/search");

  const isLoading = useRecoilValue(isLoading$);
  const voteResponseData = useRecoilValue(voteResponseData$);
  const actionInfoArray = useRecoilValue(actionInfoArray$);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessage$);

  const isObject = (
    value: any
  ): value is { icon: string; date: string; id: string; message: string } =>
    typeof value === "object" &&
    typeof value.icon === "string" &&
    typeof value.id === "string" &&
    typeof value.message === "string";

  useEffect(() => {
    getRequest();
    return () => {
      setErrorMessage("");
    };
  }, []);

  return (
    <>
      <NavBar />
      <Section>
        <Header class_name="title_button" title_content="VOTING" />

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
                style={{
                  width: "640px",
                  maxHeight: "640px",
                  borderRadius: "20px",
                }}
              />
              <GroupVoteButtons />
              {actionInfoArray.map((block, ind) => (
                <div key={ind}>
                  {isObject(block) ? (
                    <BlockActionInfo
                      message={block.message}
                      icon={block.icon}
                      date={block.date}
                    >
                      {block.id}
                    </BlockActionInfo>
                  ) : null}
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
