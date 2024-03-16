"use client";

import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa6";

interface IEComCard {
  stars: number;
  cost: number;
  src: string;
  alt: string;
  href: string;
  text: string;
  className: string;
}

export default class EComCard extends React.PureComponent<IEComCard> {
  render() {
    return (
      <Card
        className={this.props.className}
        imgAlt={this.props.alt}
        imgSrc={this.props.src}
      >
        <Link href={this.props.href}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {this.props.text}
          </h5>
        </Link>
        <div className="mb-5 mt-2.5 flex items-center">
          {Array.from({ length: 5 }).map((_item, i) => {
            const iconsProps: IconContext = { color: "yellow" };
            if (i >= this.props.stars) {
              iconsProps.color = "gray";
            }
            return (
              <IconContext.Provider key={i} value={iconsProps}>
                <FaStar />
              </IconContext.Provider>
            );
          })}

          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {this.props.stars}.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${this.props.cost}
          </span>
          <Link
            href={this.props.href}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </Link>
        </div>
      </Card>
    );
  }
}
