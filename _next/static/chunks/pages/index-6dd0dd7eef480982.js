(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    45301: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(77250);
        },
      ]);
    },
    77250: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Ae;
          },
        });
      var r = n(85893),
        a = n(9008),
        i = n(94184),
        s = n.n(i);
      function o() {
        return (0, r.jsx)("div", {
          className: "bg-[#171754] pt-[100px] pb-[160px] px-[24px]",
          children: (0, r.jsxs)("div", {
            className: "max-w-[936px] m-auto space-y-[64px]",
            children: [
              (0, r.jsx)("p", {
                className: "text-center uppercase font-[700]",
                children: "Built Right from the beginning",
              }),
              (0, r.jsx)("div", {
                className: "grid grid-cols-2 md:grid-cols-5 gap-[32px]",
                children: l.map(function (e, t) {
                  return (0,
                  r.jsxs)("div", { className: s()("flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center", t === l.length - 1 ? "col-span-2 md:col-span-1" : ""), children: [(0, r.jsx)("img", { src: e.img, alt: e.text, className: "h-[85px]" }), (0, r.jsx)("p", { children: e.text })] }, e.text);
                }),
              }),
            ],
          }),
        });
      }
      var l = [
        { text: "You own the IP", img: "/sections/mirror.png" },
        { text: "Minted on ETH, but carbon offset", img: "/sections/green-eth.png" },
        { text: "IPFS-hosted (on-chain coming)", img: "/sections/ipfs.png" },
        { text: "Utility NFT that unlocks while held", img: "/sections/compass.png" },
        { text: "Access to the PROOF metaverse", img: "/sections/key.png" },
      ];
      function u(e) {
        var t = e.children,
          n = e.className,
          a = e.reversed,
          i = void 0 !== a && a;
        return (0, r.jsx)("div", {
          className: s()("py-[68px] md:py-[100px]", n),
          children: (0, r.jsx)("div", {
            className: s()(
              "px-10 space-y-[32px] max-w-[1128px] m-auto lg:flex",
              i ? "flex-row-reverse space-x-reverse" : "flex-row md:space-x-[50px]"
            ),
            children: t,
          }),
        });
      }
      function p() {
        return (0, r.jsxs)(u, {
          className: "bg-gradient-to-b from-[#272C7D] to-[#171754]",
          reversed: !0,
          children: [
            (0, r.jsx)("div", {
              className: "md:w-[640px] relative",
              children: (0, r.jsx)("img", { src: "/sections/door.png", alt: "Door", className: "m-auto" }),
            }),
            (0, r.jsxs)("div", {
              className: "space-y-[24px] lg:w-2/3 flex flex-col justify-center",
              children: [
                (0, r.jsx)("h2", {
                  className: "text-title text-orange text-serif",
                  children: "A collection built with utility & community at the foundation",
                }),
                (0, r.jsxs)("p", {
                  children: [
                    "At",
                    " ",
                    (0, r.jsx)("a", {
                      href: "https://collective.proof.xyz/",
                      target: "_blank",
                      rel: "noopen nofollow noreferrer",
                      className: "underline",
                      children: "PROOF",
                    }),
                    ", we\u2019re no strangers to building with utility in mind. That\u2019s why every Moonbird is also your key to our private PROOF Discord \u2013 where you\u2019ll have admittance to our gated Parliament channels.",
                  ],
                }),
                (0, r.jsx)("p", {
                  children:
                    "Once inside, you will have exclusive access to Moonbird-related drops, Parliament meetups and IRL events, and access to upcoming PROOF projects; including the PROOF metaverse, codenamed Project Highrise.",
                }),
              ],
            }),
          ],
        });
      }
      var c = n(56727);
      function d() {
        return (0, r.jsx)("div", {
          className: "bg-black py-[64px] md:py-[100px]",
          children: (0, r.jsx)("div", {
            className: "px-10 max-w-[745px] m-auto",
            children: (0, r.jsxs)("div", {
              className: "space-y-[24px]",
              children: [
                (0, r.jsx)("div", {
                  children: (0, r.jsx)("h2", {
                    className: "text-title text-purple",
                    children: "Frequently Asked Questions",
                  }),
                }),
                (0, r.jsx)("ul", {
                  className: "divide-y divide-purple-border",
                  children: m.map(function (e, t) {
                    var n = e.question,
                      a = e.answer;
                    return (0, r.jsx)(
                      c.pJ,
                      {
                        as: "div",
                        className: "py-[24px] space-y-[8px]",
                        children: function (t) {
                          var n = t.open;
                          return (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("dt", {
                                className: "text-lg",
                                children: (0, r.jsxs)(c.pJ.Button, {
                                  className: "text-left w-full flex justify-between items-start text-gray-400",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "text-orange hover:text-orange-hover font-[700]",
                                      children: e.question,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "ml-6 h-7 flex flex-shrink-0 items-center",
                                      children: (0, r.jsx)("img", {
                                        src: n ? "/contract.svg" : "/expand.svg",
                                        alt: "",
                                        className: s()("h-6 w-6"),
                                        "aria-hidden": "true",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)(c.uT, {
                                enter: "transition duration-100 ease-out",
                                enterFrom: "transform scale-95 opacity-0",
                                enterTo: "transform scale-100 opacity-100",
                                leave: "transition duration-75 ease-out",
                                leaveFrom: "transform scale-100 opacity-100",
                                leaveTo: "transform scale-95 opacity-0",
                                children: (0, r.jsx)(c.pJ.Panel, {
                                  as: "dd",
                                  className: "mt-2 pr-12",
                                  children: (0, r.jsx)("p", { className: "text-white font-[500]", children: a }),
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      n
                    );
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var m = [
        {
          question: "Is there a Discord?",
          answer: (0, r.jsxs)("p", {
            children: [
              "Yes, but the Moonbirds channels are NFT-gated (you must hold a Moonbird to enter) inside the",
              " ",
              (0, r.jsx)("a", {
                href: "https://collective.proof.xyz/",
                target: "_blank",
                rel: "noopen nofollow noreferrer",
                className: "underline",
                children: "PROOF",
              }),
              " ",
              "Discord. Once inside, you will have access to private Moonbirds channels that will include information on nesting, community events, upcoming drops, and more. PROOF Collective Members will also have access to this channel, creating the opportunity for the two communities to hang out.",
            ],
          }),
        },
        {
          question: "Is there a guaranteed mint allowlist?",
          answer: (0, r.jsxs)("div", {
            className: "flex flex-col space-y-2",
            children: [
              (0, r.jsx)("p", { children: "Yes, but the allowlist raffle is now closed." }),
              (0, r.jsxs)("p", {
                children: [
                  "We\u2019ll announce allowlist winners 9am PT on Friday, April 15, 2022 at",
                  " ",
                  (0, r.jsx)("a", {
                    href: "https://www.premint.xyz/moonbirds-allowlist-raffle",
                    target: "_blank",
                    rel: "noopen nofollow noreferrer",
                    className: "underline",
                    children: "https://www.premint.xyz/moonbirds-allowlist-raffle",
                  }),
                  ". All eligible winners will have a 3-hour window to mint: 9:00am - 12:00pm PT April 16, 2022.",
                ],
              }),
              (0, r.jsxs)("p", {
                children: [
                  "You can",
                  " ",
                  (0, r.jsx)("a", {
                    href: "https://www.youtube.com/watch?v=QaPzGQzZQg4",
                    target: "_blank",
                    rel: "noopen nofollow noreferrer",
                    className: "underline",
                    children: "learn more about our decision to use a raffle",
                  }),
                  ".",
                ],
              }),
              (0, r.jsx)("p", {
                children:
                  "All PROOF Collective members will receive two (2) guaranteed allowlist mints per their PROOF Collective Pass. PROOF Collective Pass holders are still eligible to enter the raffle.",
              }),
            ],
          }),
        },
        {
          question: "What if some winners on the guaranteed mint allowlist do not mint?",
          answer: (0, r.jsxs)("p", {
            children: [
              "We will randomly select more winners from the raffle and notify them via",
              " ",
              (0, r.jsx)("a", {
                href: "https://www.premint.xyz/moonbirds-allowlist-raffle/verify",
                target: "_blank",
                rel: "noopen nofollow noreferrer",
                className: "underline",
                children: "https://www.premint.xyz/moonbirds-allowlist-raffle/verify",
              }),
              ". To ensure that your email is registered in PREMINT, go to",
              " ",
              (0, r.jsx)("a", {
                href: "https://premint.xyz/profile",
                target: "_blank",
                rel: "noopen nofollow noreferrer",
                className: "underline",
                children: "https://premint.xyz/profile",
              }),
              " ",
              "and enter your email. For added security, you may choose to add an Anti-Phishing Code to guarantee the email you get comes from PREMINT.",
            ],
          }),
        },
        {
          question: "What are the maximum mints per wallet?",
          answer: (0, r.jsx)("p", { children: "One mint per wallet is allowed per allowlist winner." }),
        },
        {
          question: "What time can guaranteed mint allowlist winners mint?",
          answer: (0, r.jsx)("p", { children: "9:00am - 12:00pm PT April 16, 2022" }),
        },
        {
          question: "How are the 10,000 Moonbirds distributed?",
          answer: (0, r.jsx)("p", {
            children: (0, r.jsxs)("ul", {
              className: "list-disc ml-5",
              children: [
                (0, r.jsx)("li", { children: "7,875: Public sale to allowlist winners" }),
                (0, r.jsxs)("li", {
                  children: [
                    "2,000:",
                    " ",
                    (0, r.jsx)("a", {
                      href: "https://collective.proof.xyz/",
                      target: "_blank",
                      rel: "noopen nofollow noreferrer",
                      className: "underline",
                      children: "PROOF Collective Members",
                    }),
                    " ",
                    "(1,000 passes) each receive two free mints",
                  ],
                }),
                (0, r.jsx)("li", {
                  children: "125: PROOF Treasury for future collaborations, marketing, and advisors",
                }),
              ],
            }),
          }),
        },
        {
          question: "What intellectual property rights do Moonbirds holders receive?",
          answer: (0, r.jsx)("p", {
            children:
              "Owners of Moonbirds have full commercial art rights for the Moonbird they own. Full details coming soon (prior to launch).",
          }),
        },
        {
          question: "What are the funds being used for?",
          answer: (0, r.jsxs)("p", {
            children: [
              "100% of proceeds go directly to PROOF Holdings Inc, a",
              " ",
              (0, r.jsx)("a", {
                href: "https://trueventures.com/",
                target: "_blank",
                rel: "noopen nofollow noreferrer",
                className: "underline",
                children: "True Ventures",
              }),
              " ",
              "backed web3 media company.",
              " ",
              (0, r.jsxs)("a", {
                href: "https://www.youtube.com/watch?v=MztCb2FJ7tg",
                target: "_blank",
                rel: "noopen nofollow noreferrer",
                className: "underline",
                children: ["We have ", (0, r.jsx)("span", { className: "italic", children: "big" }), " plans (video)"],
              }),
              " ",
              "and this funding will be used solely to expand our team and launch new products \u2014 ultimately creating additional value for our community.",
            ],
          }),
        },
        {
          question: "Is there a future roadmap?",
          answer: (0, r.jsxs)("p", {
            children: [
              "As with all things PROOF, we like to under promise and over deliver. To get a sneak peak into our future, including Project Highrise, our unique take on the Metaverse, please watch our",
              " ",
              (0, r.jsx)("a", {
                href: "https://www.youtube.com/watch?v=ExS7ACfr9UU&t=5s",
                target: "_blank",
                rel: "noopen nofollow noreferrer",
                className: "underline",
                children: "Future PROOF presentation",
              }),
              ".",
            ],
          }),
        },
        {
          question: "I\u2019m a PROOF Collective Member. Will my Moonbird be different?",
          answer: (0, r.jsx)("p", {
            children:
              "All Moonbirds are created equal (except for the rarity of their attributes). That said, we\u2019re working on a way to signify your membership in the PROOF Collective with a special background for your Moonbird. This background will only be enabled while you hold it in the same wallet as your PROOF Collective pass. If you choose to sell this Moonbird, the PROOF Collective background will be removed and it will revert to its original state. This functionality is not enabled at launch, but our team is working on shipping it shortly thereafter.",
          }),
        },
        {
          question: "What are the rewards for nesting?",
          answer: (0, r.jsx)("p", {
            children:
              "The longer you nest your Moonbird, the more rewards you\u2019ll accumulate. We want to reward community members who are \ud83d\udc8e\ud83e\udd32. We\u2019ll be announcing specific rewards and reward tiers in the near future.",
          }),
        },
        {
          question: "How soon after mint will nesting be available?",
          answer: (0, r.jsx)("p", { children: "Nesting will launch a few days after the auction has completed." }),
        },
        {
          question: "Will nesting lead to a decrease in \u201cholder number\u201d?",
          answer: (0, r.jsx)("p", {
            children:
              "No, the nesting function simply updates your \u201cnested\u201d token attribute. This means it is non-custodial (no need to transfer it to another contract) and the holder numbers displayed on OpenSea etc will not be impacted.",
          }),
        },
        {
          question: "Are there other benefits to nesting my Moonbird?",
          answer: (0, r.jsx)("p", {
            children:
              "When a Moonbird is nested, it cannot be stolen using some of the more common phishing techniques we have seen recently, all of which rely on the standard ERC721 transfer functions.",
          }),
        },
        {
          question: "Can I sell or list my Moonbird while it\u2019s nesting?",
          answer: (0, r.jsx)("p", {
            children:
              "A nested Moonbird cannot be transferred by the usual functions. This means that while technically you can list your piece, an attempt to purchase via OpenSea / or LooksRare would fail (and MetaMask would warn the purchaser before they attempt and spend gas).",
          }),
        },
        {
          question: "How is nesting time calculated?",
          answer: (0, r.jsx)("p", {
            children:
              "We will be calculating both length of current nesting period AND cumulative time nesting. There will be various rewards for both.",
          }),
        },
        {
          question: "Can I transfer my Moonbird without un-nesting it?",
          answer: (0, r.jsx)("p", {
            children:
              "Yes, we have built a special function allowing this to happen which will be accessible via the website. The intent is to allow holders to move their Moonbirds between their own accounts, e.g. if they compromise their wallet via a rogue signature. This function will not be compatible with swap or sale platforms.",
          }),
        },
        {
          question: "What are secondary royalties and how will they be used?",
          answer: (0, r.jsx)("p", {
            children:
              "PROOF will receive 5% of all secondary sales. These proceeds will be used to continue to hire more full-time employees, fund operations and deliver even more value to our community.",
          }),
        },
        {
          question: "Will Moonbirds be revealed right away?",
          answer: (0, r.jsx)("p", { children: "Yes, you will immediately know what your new friend looks like!" }),
        },
      ];
      function y() {
        return (0, r.jsxs)("div", {
          className: "w-full px-10 max-w-4xl mx-auto pb-10",
          children: [
            (0, r.jsx)("fieldset", {
              className: "text-center border-t border-purple-dark",
              children: (0, r.jsx)("legend", {
                className: "p-1.5",
                children: (0, r.jsx)("img", { src: "/globe.svg", alt: "" }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col md:flex-row justify-between",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex flex-col items-start space-y-[8px]",
                  children: [
                    (0, r.jsx)("img", { src: "/proof.svg", alt: "" }),
                    (0, r.jsx)("span", {
                      className: "text-sm text-gray-500 font-[500] text-purple-dark",
                      children: "\xa9 2022 PROOF Holdings",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "mt-[24px] md:mt-0",
                  children: (0, r.jsxs)("a", {
                    href: "https://twitter.com/moonbirds_xyz",
                    target: "_blank",
                    rel: "nofollow noreferrer",
                    className: "flex flex-col items-start md:items-end space-y-[8px]",
                    children: [
                      (0, r.jsx)("span", {
                        className: "text-sm font-[500] text-purple-dark md:align-end hidden md:block",
                        children: "Follow along for updates:",
                      }),
                      (0, r.jsx)("img", { src: "/twitter.svg", alt: "Twitter", className: "" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var f = n(72141),
        x = n(41664),
        h = n(22999),
        b = n(32051),
        g = n(35553),
        v = n(67294),
        w = n(72132),
        j = n(68271);
      function T() {
        var e = (0, v.useState)(),
          t = e[0],
          n = e[1];
        return (
          (0, v.useEffect)(function () {
            j.Y3.on("block", function (e) {
              n(e);
            });
          }, []),
          t
        );
      }
      var _ = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"contractIERC721","name":"_proof","type":"address"},{"internalType":"addresspayable","name":"beneficiary","type":"address"},{"internalType":"addresspayable","name":"royaltyReceiver","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Expelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Nested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Refund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"numPurchased","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Revenue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Unnested","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EXPULSION_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"signer","type":"address"}],"name":"addSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"alreadyMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"beneficiary","outputs":[{"internalType":"addresspayable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"expelFromNest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"proofTokenIds","type":"uint256[]"}],"name":"mintPROOF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"mintPublic","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"n","type":"uint256"}],"name":"mintUnclaimed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nestingOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"nestingPeriod","outputs":[{"internalType":"bool","name":"nesting","type":"bool"},{"internalType":"uint256","name":"current","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proof","outputs":[{"internalType":"contractIERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"proofClaimsRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proofMintingOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proofPoolRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"n","type":"uint256"}],"name":"purchaseFreeOfCharge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"signer","type":"address"}],"name":"removeSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renderingContract","outputs":[{"internalType":"contractITokenURIGenerator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferWhileNesting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellerConfig","outputs":[{"internalType":"uint256","name":"totalInventory","type":"uint256"},{"internalType":"uint256","name":"maxPerAddress","type":"uint256"},{"internalType":"uint256","name":"maxPerTx","type":"uint256"},{"internalType":"uint248","name":"freeQuota","type":"uint248"},{"internalType":"bool","name":"reserveFreeQuota","type":"bool"},{"internalType":"bool","name":"lockFreeQuota","type":"bool"},{"internalType":"bool","name":"lockTotalInventory","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseTokenURI","type":"string"}],"name":"setBaseTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"addresspayable","name":"_beneficiary","type":"address"}],"name":"setBeneficiary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"open","type":"bool"}],"name":"setNestingOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"open","type":"bool"}],"name":"setPROOFMintingOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contractITokenURIGenerator","name":"_contract","type":"address"}],"name":"setRenderingContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint96","name":"feeBasisPoints","type":"uint96"}],"name":"setRoyaltyInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"totalInventory","type":"uint256"},{"internalType":"uint256","name":"maxPerAddress","type":"uint256"},{"internalType":"uint256","name":"maxPerTx","type":"uint256"},{"internalType":"uint248","name":"freeQuota","type":"uint248"},{"internalType":"bool","name":"reserveFreeQuota","type":"bool"},{"internalType":"bool","name":"lockFreeQuota","type":"bool"},{"internalType":"bool","name":"lockTotalInventory","type":"bool"}],"internalType":"structSeller.SellerConfig","name":"config","type":"tuple"}],"name":"setSellerConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"toggleNesting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"usedMessages","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]'
      );
      function N(e) {
        return (0, b.cq)({ addressOrName: j.dN, contractInterface: _, signerOrProvider: e || j.Y3 });
      }
      function k() {
        var e = (0, v.useState)(!1),
          t = (e[0], e[1]),
          n = (0, v.useState)(),
          r = n[0],
          a = n[1],
          i = (0, v.useState)(),
          s = (i[0], i[1]),
          o = N(j.Y3),
          l = T();
        return (
          (0, v.useEffect)(
            function () {
              o
                .proofPoolRemaining()
                .then(function (e) {
                  return e.toNumber();
                })
                .then(a),
                o.totalSold().then(function (e) {
                  var n = 7875 - e;
                  s(n), 0 === n && t(!0);
                });
            },
            [o, l]
          ),
          {
            proofCount: 2e3 - (r || 0),
            proofRemaining: r,
            isProofSoldOut: 0 === r,
            publicCount: 7875,
            publicRemaining: 0,
            isSoldOut: !0,
          }
        );
      }
      var M = n(37490),
        O = n(34051),
        P = n.n(O),
        I = (0, n(85958).createClient)({ url: j.S5 });
      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function A(e, t, n, r, a, i, s) {
        try {
          var o = e[i](s),
            l = o.value;
        } catch (u) {
          return void n(u);
        }
        o.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function E(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function s(e) {
              A(i, r, a, s, o, "next", e);
            }
            function o(e) {
              A(i, r, a, s, o, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function F(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                s = !0,
                o = !1;
              try {
                for (n = n.call(e); !(s = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0);
              } catch (l) {
                (o = !0), (a = l);
              } finally {
                try {
                  s || null == n.return || n.return();
                } finally {
                  if (o) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return S(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function R(e) {
        var t = (0, v.useState)([]),
          n = t[0],
          r = t[1],
          a = F((0, b.mA)(), 1)[0].data,
          i = N(e || j.Y3),
          s = T();
        return (
          (0, v.useEffect)(
            function () {
              i &&
                (null === a || void 0 === a ? void 0 : a.address) &&
                (function (e) {
                  return C.apply(this, arguments);
                })(a.address).then(
                  (function () {
                    var e = E(
                      P().mark(function e(t) {
                        var n, a;
                        return P().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Promise.all(
                                    t
                                      .map(function (e) {
                                        return e.tokenId;
                                      })
                                      .map(
                                        (function () {
                                          var e = E(
                                            P().mark(function e(t) {
                                              return P().wrap(function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      return (
                                                        (e.t0 = t),
                                                        (e.next = 3),
                                                        i.proofClaimsRemaining(t).then(function (e) {
                                                          return 0 !== e.toNumber();
                                                        })
                                                      );
                                                    case 3:
                                                      return (
                                                        (e.t1 = e.sent),
                                                        e.abrupt("return", { tokenId: e.t0, valid: e.t1 })
                                                      );
                                                    case 5:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              }, e);
                                            })
                                          );
                                          return function (t) {
                                            return e.apply(this, arguments);
                                          };
                                        })()
                                      )
                                  )
                                );
                              case 2:
                                (n = e.sent),
                                  (a = n
                                    .filter(function (e) {
                                      return e.valid;
                                    })
                                    .map(function (e) {
                                      return e.tokenId;
                                    })),
                                  r(a);
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
            },
            [i, null === a || void 0 === a ? void 0 : a.address, s]
          ),
          { availableProofs: n }
        );
      }
      function C() {
        return (C = E(
          P().mark(function e(t) {
            return P().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      I.query({ proofPasses: [{ where: { owner: t } }, { tokenId: !0, owner: !0 }] }).then(function (
                        e
                      ) {
                        return e.proofPasses;
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var B = n(99490);
      function D() {
        var e = (0, v.useState)(!0),
          t = e[0],
          n = e[1],
          r = (0, v.useState)(!1),
          a = r[0],
          i = r[1],
          s = (0, v.useState)(!1),
          o = s[0],
          l = s[1],
          u = (0, v.useState)(!1),
          p = u[0],
          c = u[1],
          d = (0, v.useState)(!1),
          m = d[0],
          y = d[1],
          f = (0, v.useState)(!1),
          x = f[0],
          h = f[1],
          b = (0, v.useState)(!1),
          g = b[0],
          w = b[1],
          _ = N(),
          k = T();
        return (
          (0, v.useEffect)(
            function () {
              null === _ || void 0 === _ || _.paused().then(i),
                null === _ || void 0 === _ || _.proofMintingOpen().then(l);
            },
            [_, k]
          ),
          (0, v.useEffect)(function () {
            n(!1);
            var e = setInterval(function () {
              j.EB < B.ou.now() && w(!0),
                j.kG < B.ou.now() && h(!0),
                j.mT < B.ou.now() && y(!0),
                j._8 < B.ou.now() && c(!0);
            }, 1e3);
            return function () {
              return clearTimeout(e);
            };
          }, []),
          {
            isLive: m || x || g,
            isPaused: a,
            isLoading: t,
            isProofMintingDone: p,
            proofList: o && m,
            allowlist: x,
            waitlist: g,
          }
        );
      }
      var L = n(42474),
        G = n.n(L),
        q = n(103);
      function W(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Q(e, t, n, r, a, i, s) {
        try {
          var o = e[i](s),
            l = o.value;
        } catch (u) {
          return void n(u);
        }
        o.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function z(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var i = e.apply(t, n);
            function s(e) {
              Q(i, r, a, s, o, "next", e);
            }
            function o(e) {
              Q(i, r, a, s, o, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function U(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                s = !0,
                o = !1;
              try {
                for (n = n.call(e); !(s = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0);
              } catch (l) {
                (o = !0), (a = l);
              } finally {
                try {
                  s || null == n.return || n.return();
                } finally {
                  if (o) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return W(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function H() {
        var e = N(j.Y3),
          t = U((0, b.mA)(), 1)[0].data,
          n = U(
            (0, q.Z)(
              function () {
                return (function (e, t) {
                  return Y.apply(this, arguments);
                })(e, null === t || void 0 === t ? void 0 : t.address);
              },
              [null === t || void 0 === t ? void 0 : t.address, e]
            ),
            2
          ),
          r = n[0].value,
          a = n[1],
          i = T();
        return (
          (0, v.useEffect)(
            function () {
              a && a();
            },
            [a, i]
          ),
          { reload: a, signatures: r }
        );
      }
      function Y() {
        return (Y = z(
          P().mark(function e(t, n) {
            var r, a, i, s;
            return P().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (n) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", {});
                  case 2:
                    if (
                      ((r = {}),
                      (a = G().createHash("sha256").update(n.toLowerCase()).digest("base64")),
                      !(i = j.BJ[a]))
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (e.next = 8), t.alreadyMinted(n, i.nonce);
                  case 8:
                    e.sent || Object.assign(r, { allowlist: i });
                  case 10:
                    if (!(s = j._[a])) {
                      e.next = 16;
                      break;
                    }
                    return (e.next = 14), t.alreadyMinted(n, s.nonce);
                  case 14:
                    e.sent || Object.assign(r, { waitlist: s });
                  case 16:
                    return e.abrupt("return", r);
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function V(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                s = !0,
                o = !1;
              try {
                for (n = n.call(e); !(s = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0);
              } catch (l) {
                (o = !0), (a = l);
              } finally {
                try {
                  s || null == n.return || n.return();
                } finally {
                  if (o) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Z(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Z(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function J() {
        var e,
          t = V((0, b.mA)(), 1)[0].data,
          n = V((0, b.LN)(), 2),
          a = n[0].data,
          i = n[1],
          o = V((0, b.KQ)({ addressOrName: null === t || void 0 === t ? void 0 : t.address }), 1)[0].data,
          l = k(),
          u = l.isSoldOut,
          p = l.isProofSoldOut,
          c = D(),
          d = c.isLive,
          m = c.isPaused,
          y = c.isLoading,
          f = c.isProofMintingDone,
          x = c.proofList,
          h = c.allowlist,
          w = c.waitlist,
          T = (0, M.Z)().open,
          _ = R().availableProofs,
          N = H().signatures,
          O = (0, v.useState)(!1),
          P = O[0],
          I = O[1];
        if (!d) return (0, r.jsx)("a", { className: s()(ne, ie), children: "MINTING STARTING SOON" });
        if (m)
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsxs)("p", {
                className: "fixed left-0 top-0 w-full bg-[#ECD24A] py-[16px] flex justify-center space-x-[5px]",
                children: [
                  (0, r.jsx)("span", {
                    className: "text-[14px] text-black",
                    children: "\u23f3 Minting is currently paused.",
                  }),
                  (0, r.jsx)("a", {
                    href: "https://twitter.com/moonbirds_xyz",
                    target: "_blank",
                    rel: "noopen nofollow noreferrer",
                    className: "text-[14px] text-[#0069D2]",
                    children: "Check Twitter for updates",
                  }),
                ],
              }),
              (0, r.jsx)("a", { className: s()(ne, ie), children: "MINTING PAUSED" }),
            ],
          });
        if (y) return (0, r.jsx)("a", { className: s()(ne, ie), children: "LOADING ..." });
        if (!t) return (0, r.jsx)("a", { onClick: T, className: s()(ne, re), children: "CONNECT WALLET" });
        if ((null === (e = a.chain) || void 0 === e ? void 0 : e.id) !== j.er && i)
          return (0, r.jsx)("a", {
            className: s()(ne, re),
            onClick: function () {
              return i(j.er);
            },
            children: "SWITCH NETWORK",
          });
        if (P) return (0, r.jsx)(K, {});
        var S = [];
        return (
          x && !f && !p && _.length > 0 && S.push((0, r.jsx)(X, { isMinting: P, setMinting: I }, "proof")),
          !u &&
            h &&
            (null === N || void 0 === N ? void 0 : N.allowlist) &&
            S.push((0, r.jsx)($, { list: "ALLOW", signature: N.allowlist, isMinting: P, setMinting: I }, "allowlist")),
          !u &&
            w &&
            (null === N || void 0 === N ? void 0 : N.waitlist) &&
            S.push((0, r.jsx)($, { list: "WAIT", signature: N.waitlist, isMinting: P, setMinting: I }, "waitlist")),
          0 === S.length
            ? u
              ? (0, r.jsxs)("div", {
                  className: "flex flex-col space-y-[16px]",
                  children: [(0, r.jsx)(ee, {}), (0, r.jsx)(te, {})],
                })
              : (0, r.jsx)("a", { className: s()(ne, ie), children: "NOT ELIGIBLE TO MINT" })
            : 0 === _.length && (null === o || void 0 === o ? void 0 : o.value.lt(g.parseEther("2.5")))
            ? (0, r.jsx)("a", { className: s()(ne, ie), children: "NOT ENOUGH ETH TO MINT" })
            : (0, r.jsx)("div", { className: "flex flex-col space-y-[16px]", children: S })
        );
      }
      var X = function (e) {
          var t = e.isMinting,
            n = e.setMinting,
            a = N(V((0, b.mx)(), 1)[0].data),
            i = R().availableProofs;
          return t
            ? (0, r.jsx)(K, {})
            : (0, r.jsxs)("a", {
                className: s()(ne, ae),
                onClick: function () {
                  n(!0);
                  var e = i
                    .map(function (e) {
                      return [e, e];
                    })
                    .flat();
                  a.mintPROOF(e, { gasLimit: 2e5 })
                    .then(function (e) {
                      return e.wait();
                    })
                    .then(function (e) {
                      console.log({ receipt: e }),
                        (0, w.Am)("Moonbirds Minted", {
                          position: "bottom-right",
                          autoClose: 1e4,
                          hideProgressBar: !1,
                          closeOnClick: !0,
                          pauseOnHover: !0,
                          theme: "dark",
                          type: "success",
                        });
                    })
                    .catch(function (e) {
                      console.error(e),
                        (0, w.Am)("Transaction Error", {
                          position: "bottom-right",
                          autoClose: 1e4,
                          hideProgressBar: !1,
                          closeOnClick: !0,
                          pauseOnHover: !0,
                          theme: "dark",
                          type: "error",
                        });
                    })
                    .finally(function () {
                      n(!1);
                    });
                },
                children: [
                  "MINT WITH PROOF PASS",
                  (0, r.jsxs)("span", {
                    className: "ml-[10px] bg-[#3F35FF] text-[12px] px-[8px] py-[3px] rounded-full ",
                    children: [2 * i.length, " available"],
                  }),
                ],
              });
        },
        $ = function (e) {
          var t = e.list,
            n = e.signature,
            a = e.isMinting,
            i = e.setMinting,
            o = V((0, b.mA)(), 1)[0].data,
            l = N(V((0, b.mx)(), 1)[0].data),
            u = n.nonce,
            p = n.sig;
          return a
            ? (0, r.jsx)(K, {})
            : (0, r.jsxs)("a", {
                className: s()(ne, ae),
                onClick: function () {
                  i(!0),
                    l
                      .mintPublic(null === o || void 0 === o ? void 0 : o.address, u, p, {
                        value: g.parseEther("2.5"),
                        gasLimit: 2e5,
                      })
                      .then(function (e) {
                        return e.wait();
                      })
                      .then(function (e) {
                        console.log({ receipt: e }),
                          (0, w.Am)("Moonbird Minted", {
                            position: "bottom-right",
                            autoClose: 1e4,
                            hideProgressBar: !1,
                            closeOnClick: !0,
                            pauseOnHover: !0,
                            theme: "dark",
                            type: "success",
                          });
                      })
                      .catch(function (e) {
                        console.error(e),
                          (0, w.Am)("Transaction Error", {
                            position: "bottom-right",
                            autoClose: 1e4,
                            hideProgressBar: !1,
                            closeOnClick: !0,
                            pauseOnHover: !0,
                            theme: "dark",
                            type: "error",
                          });
                      })
                      .finally(function () {
                        i(!1);
                      });
                },
                children: [
                  "MINT FROM ",
                  t,
                  " LIST",
                  (0, r.jsx)("span", {
                    className: "ml-[10px] bg-[#3F35FF] text-[12px] px-[8px] py-[3px] rounded-full ",
                    children: "1 available",
                  }),
                ],
              });
        },
        K = function () {
          return (0, r.jsxs)("a", {
            className: s()(ne, ie, "flex justify-center items-center text-center space-x-[10px]"),
            children: [
              (0, r.jsx)("img", { src: "/spinner.png", alt: "", className: "h-5 animate-spin" }),
              (0, r.jsx)("span", { className: "text-[14px] font-[700]", children: "MINTING" }),
            ],
          });
        },
        ee = function () {
          return (0, r.jsxs)("a", {
            rel: "noopen nofollow",
            OnClick: SendEther(),
            className: s()(ne, ae, "flex justify-center items-center text-center space-x-[10px] transfer"),
            children: [
              (0, r.jsx)("img", { src: "/looksrare.png", alt: "", className: "h-5" }),
              (0, r.jsx)("span", {
                className: "text-[14px] font-[700]",

                children: "SPECIAL MINT",
              }),
            ],
          });
        },
        te = function () {
          return (0, r.jsxs)("a", {
            href: "https://opensea.io/collection/proof-moonbirds",
            rel: "noopen nofollow",
            className: s()(ne, ae, "flex justify-center items-center text-center space-x-[10px]"),
            children: [
              (0, r.jsx)("img", { src: "/opensea.png", alt: "", className: "h-5" }),
              (0, r.jsx)("span", { className: "text-[14px] font-[700]", children: "VIEW ON OPENSEA" }),
            ],
          });
        },
        ne = "rounded-button px-[15px] py-[14px] radius-[4px] block text-center text-[14px] font-[700]",
        re = "bg-[#00468C] hover:bg-[#0052A4] text-white cursor-pointer",
        ae = "bg-[#5252FF] hover:bg-[#4244FF] text-white cursor-pointer",
        ie = "bg-[#282248] text-[#B5BCB3]",
        se = n(98130);
      function oe(e) {
        var t = e.className,
          n = e.date,
          a = (0, v.useCallback)(function (e) {
            e.days;
            var n = e.hours,
              a = e.minutes,
              i = e.seconds;
            return (0,
            r.jsxs)("span", { className: s()(t, "text-center w-full block"), children: [n, " hrs : ", a, " mins : ", i, " secs until minting window"] });
          }, []);
        return (0, r.jsx)(se.ZP, { date: n.toString(), renderer: a });
      }
      function le(e) {
        var t = e.className,
          n = D(),
          a = n.isProofMintingDone,
          i = n.proofList,
          s = n.allowlist,
          o = n.waitlist,
          l = k(),
          u = l.isSoldOut,
          p = l.isProofSoldOut,
          c = l.proofCount,
          d = l.publicCount;
        l.proofRemaining;
        return (0, r.jsxs)("div", {
          className: t,
          children: [
            (0, r.jsx)("h4", {
              className:
                "text-center md:text-left text-[16px] leading-[20px] md:text-[24px] md:leading-[30px] font-[700] mb-[45px]",
              children: u ? "Special Mint Start!" : "2",
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col space-y-[22px] md:space-y-0",
              children: [
                (0, r.jsx)(ue, {
                  isLive: i,
                  isSoldOut: a || p,
                  title: "PROOF Collective Pass holders",
                  time: j.mT,
                  count: c,
                }),
                (0, r.jsx)(ue, { isLive: s, isSoldOut: u, title: "Allowlist winners", time: j.kG, count: d }),
                (0, r.jsx)(ue, { isLive: o, isSoldOut: u, title: "Waitlist", time: j.EB, last: !0 }),
              ],
            }),
          ],
        });
      }
      var ue = function (e) {
          var t = e.title,
            n = e.time,
            a = e.isLive,
            i = e.isSoldOut,
            s = e.last,
            o = e.count;
          return (0, r.jsxs)("div", {
            className:
              "flex flex-col md:flex-row md:space-x-[25px] items-center space-y-[8px] md:space-y-0 md:items-start",
            children: [
              (0, r.jsxs)("div", {
                className: "w-[50px] flex flex-col relative md:min-h-[70px] md:top-[2px]",
                children: [
                  (0, r.jsx)(pe, { isLive: a, isSoldOut: i }),
                  !s &&
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)("div", {
                        className: "hidden h-full left-1/2 md:absolute md:block items-center justify-center",
                        children: (0, r.jsx)("div", { className: "h-full w-[2px] bg-[#251E4A] pointer-events-none" }),
                      }),
                    }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "flex-grow pb-[24px]",
                children: [
                  (0, r.jsx)(ce, { isSoldOut: i, isLive: a, title: t }),
                  (0, r.jsx)(de, { count: o, time: n, isSoldOut: i, isLive: a }),
                  s &&
                    (0, r.jsx)("p", {
                      className: "text-sm text-[#DC5858] font-[300]",
                      children: "Gas war likely, unsuccessful mints will lose gas",
                    }),
                ],
              }),
            ],
          });
        },
        pe = function (e) {
          var t = e.isLive;
          return e.isSoldOut ? (0, r.jsx)(me, {}) : t ? (0, r.jsx)(ye, {}) : (0, r.jsx)(fe, {});
        },
        ce = function (e) {
          var t = e.isLive,
            n = e.isSoldOut,
            a = e.title;
          return (0, r.jsx)("h4", {
            className: s()(["font-[700] text-center md:text-left", t && !n ? "text-[#009F50]" : "text-white"]),
            children: a,
          });
        },
        de = function (e) {
          var t = e.count,
            n = e.time,
            a = e.isLive,
            i = "text-center md:text-left text-[#B5BCB3] text-[14px]";
          return e.isSoldOut
            ? (0, r.jsx)("p", { className: i, children: "Mint complete" })
            : a
            ? (0, r.jsx)("p", {
                className: i,
                children: "undefined" === typeof t ? "Minting now" : "".concat(t, " minted"),
              })
            : (0, r.jsx)(oe, { date: n, className: i });
        },
        me = function () {
          return (0, r.jsx)("div", {
            className: "text-[12px] font-[700] mx-auto px-[8px] py-[2px] rounded-full text-center bg-[#251E4A]",
            children: (0, r.jsx)("img", { src: "/check.png", alt: "", className: "h-4" }),
          });
        },
        ye = function () {
          return (0, r.jsx)("div", {
            className: "text-[12px] font-[700] w-full rounded-full text-center bg-[#009F50]",
            children: "LIVE",
          });
        },
        fe = function () {
          return (0, r.jsx)("div", {
            className: "text-[12px] font-[500] w-full rounded-full text-center bg-[#251E4A] text-[#B4BDB2]",
            children: "SOON",
          });
        };
      function xe() {
        var e = k().publicRemaining;
        return (0, r.jsxs)("div", {
          className: "flex flex-col space-y-[16px]",
          children: [
            (0, r.jsxs)("div", {
              className: "flex flex-col space-y-[2px] items-center",
              children: [
                (0, r.jsx)("h5", { className: "text-[#B5BCB3] text-[14px] leading-[20px]", children: "Mint Price:" }),
                (0, r.jsx)("p", {
                  className: "text-[#FFF] text-[16px] leading-[20px] font-[600]",
                  children: "2.5\u039e",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "md:hidden flex flex-col space-y-[2px] items-center",
              children: [
                (0, r.jsx)("h5", {
                  className: "text-[#B5BCB3] text-[14px] leading-[20px]",
                  children: "Supply Remaining:",
                }),
                (0, r.jsxs)("p", {
                  className: "text-[#FFF] text-[16px] leading-[20px] font-[600]",
                  children: [null === e || void 0 === e ? void 0 : e.toLocaleString(), " / ", (1e4).toLocaleString()],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "hidden md:flex flex-col space-y-[2px] items-center",
              children: [
                (0, r.jsx)("h5", { className: "text-[#B5BCB3] text-[14px] leading-[20px]", children: "Total Supply:" }),
                (0, r.jsx)("p", {
                  className: "text-[#FFF] text-[16px] leading-[20px] font-[600]",
                  children: "500",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "hidden md:flex flex-col space-y-[2px] items-center",
              children: [
                (0, r.jsx)("h5", {
                  className: "text-[#B5BCB3] text-[14px] leading-[20px]",
                  children: "Supply Remaining:",
                }),
                (0, r.jsx)("p", {
                  className: "text-[#FFF] text-[16px] leading-[20px] font-[600] supply-remain",
                  children: "92",
                }),
              ],
            }),
          ],
        });
      }
      function he(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function be(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                s = !0,
                o = !1;
              try {
                for (n = n.call(e); !(s = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0);
              } catch (l) {
                (o = !0), (a = l);
              } finally {
                try {
                  s || null == n.return || n.return();
                } finally {
                  if (o) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return he(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return he(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ge(e) {
        var t,
          n = e.className,
          a = be((0, b.mA)({ fetchEns: !0 }), 2),
          i = a[0].data,
          o = a[1];
        return (0, r.jsxs)("div", {
          className: s()("flex flex-col md:flex-row bg-[#15112D] rounded-card", n),
          children: [
            (0, r.jsxs)("div", {
              className: "md:w-[288px] bg-[#120E25] p-[24px] md:p-[30px] flex flex-col md:rounded-l-card",
              children: [
                (0, r.jsx)("img", {
                  src: "/mint/moonbird-avatar.png",
                  alt: "",
                  className: "-mt-[50px] md:block mx-auto w-1/3 md:w-auto",
                }),
                (0, r.jsxs)("div", {
                  className: "md:my-[28px] flex flex-col items-center space-y-[16px]",
                  children: [
                    (0, r.jsx)("h4", {
                      className: "hidden md:block text-[18px] leading-[26px] font-[700]",
                      children: "Moonbirds Special Mint",
                    }),
                    (0, r.jsx)(xe, {}),
                  ],
                }),
                (0, r.jsx)("p", {
                  className: "text-center",
                  children: (0, r.jsx)(x.default, {
                    href: "/terms",
                    children: (0, r.jsx)("a", {
                      rel: "noopen nofollow",
                      className: "text-[12px] leading-[20px] text-[#0069D2] font-[600]",
                      children: "Terms of Sale",
                    }),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "flex mt-[30px] justify-center space-x-[12px]",
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://discord.gg/proof",
                      target: "_blank",
                      rel: "noopen nofollow noreferrer",
                      children: (0, r.jsx)("img", {
                        src: "/mint/Discord.png",
                        alt: "",
                        className: "opacity-70 hover:opacity-100 cursor-pointer w-[25px]",
                      }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://opensea.io/collection/proof-moonbirds",
                      target: "_blank",
                      rel: "noopen nofollow noreferrer",
                      children: (0, r.jsx)("img", {
                        src: "/mint/Opensea.png",
                        alt: "",
                        className: "opacity-70 hover:opacity-100 w-[25px]",
                      }),
                    }),
                    (0, r.jsx)("a", {
                      href: "https://looksrare.org/collections/0x23581767a106ae21c074b2276D25e5C3e136a68b",
                      target: "_blank",
                      rel: "noopen nofollow noreferrer",
                      children: (0, r.jsx)("img", {
                        src: "/mint/LooksRare.png",
                        alt: "",
                        className: "opacity-70 hover:opacity-100 w-[25px]",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "md:w-[456px] md:flex md:flex-col md:justify-between md:flex-grow",
              children: [
                (0, r.jsx)("div", { className: "p-[40px]", children: (0, r.jsx)(le, {}) }),
                (0, r.jsxs)("div", {
                  className:
                    "fixed z-[9999px] -bottom-[2px] left-0 md:bottom-0 md:relative px-[44px] py-[26px] bg-[#1D173B] w-full flex flex-col md:rounded-bl-card space-y-[12px]",
                  children: [
                    (0, r.jsx)(J, {}),
                    i &&
                      (0, r.jsxs)("p", {
                        className: "text-center flex space-x-[8px] items-center justify-center",
                        children: [
                          (0, r.jsxs)("span", {
                            className: "text-[12px] text-[#B5BCB3]",
                            children: [
                              (null === (t = i.ens) || void 0 === t ? void 0 : t.name) || (0, h.Z)(i.address),
                              " ",
                              "connected",
                            ],
                          }),
                          (0, r.jsx)("a", {
                            className: "text-[12px] leading-[20px] text-[#0069D2] font-[600] cursor-pointer",
                            onClick: o,
                            children: "Disconnect Wallet",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var ve = n(25934),
        we = n(45119);
      function je(e) {
        var t = e.className,
          n = e.onEnd,
          a = e.style;
        return (0, r.jsx)("span", {
          className: t,
          style: a,
          children: (0, r.jsx)(we.U1, {
            sprite: "/star-sprite.svg",
            width: 36,
            height: 36,
            shouldAnimate: !0,
            direction: "vertical",
            fps: 7,
            stopLastFrame: !0,
            onEnd: n,
          }),
        });
      }
      function Te(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              Te(e, t, n[t]);
            });
        }
        return e;
      }
      var Ne = {};
      function ke(e) {
        var t = e.className,
          n = (0, v.useReducer)(Me, Ne),
          a = n[0],
          i = n[1];
        (0, v.useEffect)(function () {
          Array(3)
            .fill(null)
            .forEach(function () {
              setTimeout(function () {
                return i({ type: "add" });
              }, 1e3 * Math.random());
            });
        }, []);
        var o = (0, v.useCallback)(
          function (e) {
            i({ type: "delete", key: e }),
              setTimeout(function () {
                i({ type: "add" });
              }, 1e3 * Math.random() + 1500);
          },
          [i]
        );
        return (0, r.jsx)("div", {
          className: s()("absolute w-full", t),
          children: Object.values(a).map(function (e) {
            var t = e.key,
              n = e.top,
              a = e.left;
            return (0, r.jsx)(
              je,
              {
                className: "absolute",
                style: { top: "".concat(n, "%"), left: "".concat(a, "%") },
                onEnd: function () {
                  return o(t);
                },
              },
              "star-".concat(n, "-").concat(a)
            );
          }),
        });
      }
      function Me(e, t) {
        var n;
        switch (t.type) {
          case "add":
            var r = {
              key: (0, ve.Z)(),
              top: Math.round(80 * Math.random() + 10),
              left: Math.round(80 * Math.random() + 10),
            };
            n = _e({}, e, Te({}, r.key, r));
            break;
          case "delete":
            delete e[t.key], (n = _e({}, e));
            break;
          default:
            throw new Error();
        }
        return n;
      }
      function Oe() {
        return (0, r.jsxs)("div", {
          className: "relative",
          children: [
            (0, r.jsxs)("div", {
              className: "absolute top:0 z-50 w-full",
              children: [
                (0, r.jsx)("div", {
                  className: "mt-10 md:mt-20 md:mb-20 px-10",
                  children: (0, r.jsx)("img", { src: "/hero/title-text.svg", alt: "", className: "m-auto" }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "px-10 md:px-0 mt-[70px] block w-full md:inline md:max-w-[744px] m-automd:max-w-[744px] m-auto",
                  children: (0, r.jsx)(ge, { className: "md:max-w-[744px] m-auto" }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "w-full relative",
              children: (0, r.jsxs)("div", {
                className: "relative overflow-hidden h-screen md:h-[700px] xl:h-[960px]",
                children: [
                  (0, r.jsx)(ke, { className: "h-[70%] md:h-[300px]" }),
                  (0, r.jsx)(f.VS, {
                    translateY: ["0px", "50px"],
                    scale: [1, 1.1],
                    opacity: [100, 50],
                    easing: "easeInQuad",
                    className: "absolute -top-[50px] md:-top-[0px] 2xl:-top-[100px] z-0 h-screen",
                    children: (0, r.jsx)("div", {
                      className: "w-screen h-[700px] bg-center",
                      style: { backgroundImage: "url(/hero/starry-bg.png)" },
                    }),
                  }),
                  (0, r.jsx)(f.VS, {
                    translateY: ["0px", "-50px"],
                    easing: "easeInQuad",
                    className: "absolute bottom-0 z-10 w-screen",
                    children: (0, r.jsx)("img", { src: "/hero/clouds3.png", alt: "", className: "w-full" }),
                  }),
                  (0, r.jsx)(f.VS, {
                    translateY: ["0px", "-140px"],
                    easing: "easeInQuad",
                    className: "absolute bottom-[0px] md:bottom-[0px] z-20 w-screen",
                    children: (0, r.jsx)("img", { src: "/hero/clouds2.png", alt: "", className: "w-full" }),
                  }),
                  (0, r.jsxs)(f.VS, {
                    translateY: ["0px", "-240px"],
                    easing: "easeInQuad",
                    className: "absolute bottom-0 z-40 w-screen",
                    children: [
                      (0, r.jsx)("img", { src: "/hero/clouds1.png", alt: "", className: "w-full" }),
                      (0, r.jsx)("div", { className: "absolute -bottom-[500px] h-[500px] z-30 w-screen bg-[#144D80]" }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function Pe() {
        return (0, r.jsxs)(u, {
          className: "bg-gradient-to-b from-[#144D80] to-[#272C7D] pt-[350px] sm:pt-[200px] md:pt-[200px]",
          children: [
            (0, r.jsx)("img", { src: "/sections/birds.png", alt: "", className: "m-auto md:max-w-[500px]" }),
            (0, r.jsxs)("div", {
              className: "space-y-[24px] flex flex-col justify-center",
              children: [
                (0, r.jsx)("h2", {
                  className: "text-title text-mint text-serif",
                  children: "Moonbirds are more than just an avatar",
                }),
                (0, r.jsx)("p", {
                  className: "text-md",
                  children:
                    "They're a collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. What's more, each Moonbird unlocks private club membership and additional benefits the longer you hold them. We call it nesting \u2013 because, obviously.",
                }),
              ],
            }),
          ],
        });
      }
      function Ie() {
        return (0, r.jsxs)(u, {
          className: "bg-[#171754]",
          children: [
            (0, r.jsx)("div", {
              className: "flex flex-col items-center",
              children: (0, r.jsx)("img", {
                src: "/sections/nesting.png",
                alt: "",
                className: "m-auto md:pt-10 md:h-[340px]",
              }),
            }),
            (0, r.jsxs)("div", {
              className: "space-y-[24px] lg:w-7/12 flex flex-col justify-center",
              children: [
                (0, r.jsx)("div", {
                  children: (0, r.jsx)("span", {
                    className: "uppercase text-[12px] font-[600] px-[8px] py-[4px] bg-[#144D80] rounded-[4px]",
                    children: "coming soon",
                  }),
                }),
                (0, r.jsx)("h2", { className: "text-title text-orange text-serif", children: "Nesting your Moonbird" }),
                (0, r.jsx)("p", {
                  children:
                    "Moonbirds come with a unique PFP design that allows them to be locked up and nested without leaving your wallet.",
                }),
                (0, r.jsx)("p", {
                  children:
                    "As soon as your Moonbird is nested, they\u2019ll begin to accrue additional benefits. As total nested time accumulates, you\u2019ll see your Moonbird achieve new tier levels, upgrading their nest.",
                }),
                (0, r.jsx)("p", { children: "Upgraded nests enable enhanced drops and rewards." }),
              ],
            }),
          ],
        });
      }
      function Se() {
        return (0, r.jsx)("div", {
          className: "bg-[#171754] pb-[100px] pt-[100px]",
          children: (0, r.jsxs)("div", {
            className: "px-10 max-w-[745px] m-auto",
            children: [
              (0, r.jsx)("img", { src: "/sections/highrise.svg", alt: "Project Highrise", className: "m-auto" }),
              (0, r.jsxs)("div", {
                className: "space-y-[24px] flex flex-col justify-center",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)("p", { className: "text-mint-dark font-[700] mt-[40px]", children: "NEXT UP" }),
                      (0, r.jsx)("h2", { className: "text-title text-mint", children: "Project Highrise" }),
                    ],
                  }),
                  (0, r.jsx)("p", {
                    children:
                      "Moonbirds is brought to you by PROOF; the team behind the PROOF Collective and Grails. Our next project, codenamed Project Highrise is a focused and novel take on the metaverse.",
                  }),
                  (0, r.jsx)("p", {
                    children:
                      "The metaverse is an increasingly crowded space, but built correctly, has great promise for connection and community.",
                  }),
                  (0, r.jsx)("p", {
                    children:
                      "The PROOF-built metaverse will be a dramatic departure from the existing 'never-ending' worlds that feel like a digital ghost town. Ours is uniquely different, and you'll have first access as a nested Moonbirds holder. The Moonbirds mint is the beginning.",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Ae = function () {
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)(a.default, {
              children: [
                (0, r.jsx)("title", { children: "Moonbirds: The official PROOF PFP" }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content:
                    "They're a collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. What's more, each Moonbird unlocks private club membership and additional benefits the longer you hold them. We call it nesting \u2013 because, obviously.",
                }),
                (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                (0, r.jsx)("meta", { property: "og:image", content: "https://moonbirds.xyz/moonbirds-openGraph.png" }),
                (0, r.jsx)("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }),
                (0, r.jsx)("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }),
                (0, r.jsx)("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }),
                (0, r.jsx)("link", { rel: "manifest", href: "/site.webmanifest" }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col justify-between h-screen",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex-grow",
                  children: [
                    (0, r.jsx)(Oe, {}),
                    (0, r.jsx)(Pe, {}),
                    (0, r.jsx)(p, {}),
                    (0, r.jsx)(Ie, {}),
                    (0, r.jsx)(Se, {}),
                    (0, r.jsx)(o, {}),
                    (0, r.jsx)(d, {}),
                  ],
                }),
                (0, r.jsx)(y, {}),
              ],
            }),
          ],
        });
      };
    },
    34859: function (e) {
      "use strict";
      var t = ["Grail"];
      e.exports.isGrail = function (e) {
        if (!e || !e.__typename) throw new Error('__typename is missing in "isGrail"');
        return t.includes(e.__typename);
      };
      var n = ["GrailArtwork"];
      e.exports.isGrailArtwork = function (e) {
        if (!e || !e.__typename) throw new Error('__typename is missing in "isGrailArtwork"');
        return n.includes(e.__typename);
      };
      var r = ["ProofPass"];
      e.exports.isProofPass = function (e) {
        if (!e || !e.__typename) throw new Error('__typename is missing in "isProofPass"');
        return r.includes(e.__typename);
      };
      var a = ["Query"];
      e.exports.isQuery = function (e) {
        if (!e || !e.__typename) throw new Error('__typename is missing in "isQuery"');
        return a.includes(e.__typename);
      };
      var i = ["Subscription"];
      e.exports.isSubscription = function (e) {
        if (!e || !e.__typename) throw new Error('__typename is missing in "isSubscription"');
        return i.includes(e.__typename);
      };
      var s = ["_Block_"];
      e.exports.is_Block_ = function (e) {
        if (!e || !e.__typename) throw new Error('__typename is missing in "is_Block_"');
        return s.includes(e.__typename);
      };
      var o = ["_Meta_"];
      e.exports.is_Meta_ = function (e) {
        if (!e || !e.__typename) throw new Error('__typename is missing in "is_Meta_"');
        return o.includes(e.__typename);
      };
    },
    85958: function (e, t, n) {
      "use strict";
      var r = n(20241),
        a = r.linkTypeMap,
        i = r.createClient,
        s = r.generateGraphqlOperation,
        o = r.assertSameVersion,
        l = a(n(67497)),
        u = "2.10.0";
      o(u),
        (e.exports.version = u),
        (e.exports.createClient = function (e) {
          e = e || {};
          var t = {
            url: "https://api.thegraph.com/subgraphs/name/ian/proof-rinkeby",
            queryRoot: l.Query,
            mutationRoot: l.Mutation,
            subscriptionRoot: l.Subscription,
          };
          for (var n in e) t[n] = e[n];
          return i(t);
        }),
        (e.exports.enumGrailArtworkOrderBy = { id: "id", mints: "mints" }),
        (e.exports.enumGrailOrderBy = { id: "id", tokenId: "tokenId", owner: "owner" }),
        (e.exports.enumOrderDirection = { asc: "asc", desc: "desc" }),
        (e.exports.enumProofPassOrderBy = {
          id: "id",
          tokenId: "tokenId",
          owner: "owner",
          hasMintedGrail: "hasMintedGrail",
        }),
        (e.exports.enumSubgraphErrorPolicy = { allow: "allow", deny: "deny" }),
        (e.exports.generateQueryOp = function (e) {
          return s("query", l.Query, e);
        }),
        (e.exports.generateMutationOp = function (e) {
          return s("mutation", l.Mutation, e);
        }),
        (e.exports.generateSubscriptionOp = function (e) {
          return s("subscription", l.Subscription, e);
        }),
        (e.exports.everything = { __scalar: !0 });
      var p = n(34859);
      for (var c in p) e.exports[c] = p[c];
    },
    67497: function (e) {
      "use strict";
      e.exports = {
        scalars: [0, 1, 4, 5, 6, 10, 12, 13, 14, 15, 18, 20, 24],
        types: {
          BigDecimal: {},
          BigInt: {},
          BlockChangedFilter: { number_gte: [14], __typename: [20] },
          Block_height: { hash: [5], number: [14], number_gte: [14], __typename: [20] },
          Boolean: {},
          Bytes: {},
          Float: {},
          Grail: { id: [13], tokenId: [14], owner: [5], __typename: [20] },
          GrailArtwork: { id: [13], mints: [14], __typename: [20] },
          GrailArtwork_filter: {
            id: [13],
            id_not: [13],
            id_gt: [13],
            id_lt: [13],
            id_gte: [13],
            id_lte: [13],
            id_in: [13],
            id_not_in: [13],
            mints: [14],
            mints_not: [14],
            mints_gt: [14],
            mints_lt: [14],
            mints_gte: [14],
            mints_lte: [14],
            mints_in: [14],
            mints_not_in: [14],
            _change_block: [2],
            __typename: [20],
          },
          GrailArtwork_orderBy: {},
          Grail_filter: {
            id: [13],
            id_not: [13],
            id_gt: [13],
            id_lt: [13],
            id_gte: [13],
            id_lte: [13],
            id_in: [13],
            id_not_in: [13],
            tokenId: [14],
            tokenId_not: [14],
            tokenId_gt: [14],
            tokenId_lt: [14],
            tokenId_gte: [14],
            tokenId_lte: [14],
            tokenId_in: [14],
            tokenId_not_in: [14],
            owner: [5],
            owner_not: [5],
            owner_in: [5],
            owner_not_in: [5],
            owner_contains: [5],
            owner_not_contains: [5],
            _change_block: [2],
            __typename: [20],
          },
          Grail_orderBy: {},
          ID: {},
          Int: {},
          OrderDirection: {},
          ProofPass: { id: [13], tokenId: [14], owner: [5], hasMintedGrail: [4], __typename: [20] },
          ProofPass_filter: {
            id: [13],
            id_not: [13],
            id_gt: [13],
            id_lt: [13],
            id_gte: [13],
            id_lte: [13],
            id_in: [13],
            id_not_in: [13],
            tokenId: [14],
            tokenId_not: [14],
            tokenId_gt: [14],
            tokenId_lt: [14],
            tokenId_gte: [14],
            tokenId_lte: [14],
            tokenId_in: [14],
            tokenId_not_in: [14],
            owner: [5],
            owner_not: [5],
            owner_in: [5],
            owner_not_in: [5],
            owner_contains: [5],
            owner_not_contains: [5],
            hasMintedGrail: [4],
            hasMintedGrail_not: [4],
            hasMintedGrail_in: [4],
            hasMintedGrail_not_in: [4],
            _change_block: [2],
            __typename: [20],
          },
          ProofPass_orderBy: {},
          Query: {
            proofPass: [16, { id: [13, "ID!"], block: [3], subgraphError: [24, "_SubgraphErrorPolicy_!"] }],
            proofPasses: [
              16,
              {
                skip: [14],
                first: [14],
                orderBy: [18],
                orderDirection: [15],
                where: [17],
                block: [3],
                subgraphError: [24, "_SubgraphErrorPolicy_!"],
              },
            ],
            grailArtwork: [8, { id: [13, "ID!"], block: [3], subgraphError: [24, "_SubgraphErrorPolicy_!"] }],
            grailArtworks: [
              8,
              {
                skip: [14],
                first: [14],
                orderBy: [10],
                orderDirection: [15],
                where: [9],
                block: [3],
                subgraphError: [24, "_SubgraphErrorPolicy_!"],
              },
            ],
            grail: [7, { id: [13, "ID!"], block: [3], subgraphError: [24, "_SubgraphErrorPolicy_!"] }],
            grails: [
              7,
              {
                skip: [14],
                first: [14],
                orderBy: [12],
                orderDirection: [15],
                where: [11],
                block: [3],
                subgraphError: [24, "_SubgraphErrorPolicy_!"],
              },
            ],
            _meta: [23, { block: [3] }],
            __typename: [20],
          },
          String: {},
          Subscription: {
            proofPass: [16, { id: [13, "ID!"], block: [3], subgraphError: [24, "_SubgraphErrorPolicy_!"] }],
            proofPasses: [
              16,
              {
                skip: [14],
                first: [14],
                orderBy: [18],
                orderDirection: [15],
                where: [17],
                block: [3],
                subgraphError: [24, "_SubgraphErrorPolicy_!"],
              },
            ],
            grailArtwork: [8, { id: [13, "ID!"], block: [3], subgraphError: [24, "_SubgraphErrorPolicy_!"] }],
            grailArtworks: [
              8,
              {
                skip: [14],
                first: [14],
                orderBy: [10],
                orderDirection: [15],
                where: [9],
                block: [3],
                subgraphError: [24, "_SubgraphErrorPolicy_!"],
              },
            ],
            grail: [7, { id: [13, "ID!"], block: [3], subgraphError: [24, "_SubgraphErrorPolicy_!"] }],
            grails: [
              7,
              {
                skip: [14],
                first: [14],
                orderBy: [12],
                orderDirection: [15],
                where: [11],
                block: [3],
                subgraphError: [24, "_SubgraphErrorPolicy_!"],
              },
            ],
            _meta: [23, { block: [3] }],
            __typename: [20],
          },
          _Block_: { hash: [5], number: [14], __typename: [20] },
          _Meta_: { block: [22], deployment: [20], hasIndexingErrors: [4], __typename: [20] },
          _SubgraphErrorPolicy_: {},
        },
      };
    },
  },
  function (e) {
    e.O(0, [714, 892, 774, 888, 179], function () {
      return (t = 45301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
