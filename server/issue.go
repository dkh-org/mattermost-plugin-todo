package main

import (
	"fmt"
	"time"

	"github.com/mattermost/mattermost-server/v5/model"
)

// Issue represents a to do issue
type Issue struct {
	ID       string `json:"id"`
	Message  string `json:"message"`
	CreateAt int64  `json:"create_at"`
}

// ExtendedIssue extends the information on Issue to be used on the front-end
type ExtendedIssue struct {
	Issue
	ForeignUser     string `json:"user"`
	ForeignList     string `json:"list"`
	ForeignPosition int    `json:"position"`
}

func newIssue(message string) *Issue {
	return &Issue{
		ID:       model.NewId(),
		CreateAt: model.GetMillis(),
		Message:  message,
	}
}

func issuesListToString(issues []*ExtendedIssue) string {
	if len(issues) == 0 {
		return "Nothing to do!"
	}

	str := "\n\n"

	for _, issue := range issues {
		createAt := time.Unix(issue.CreateAt/1000, 0)
		str += fmt.Sprintf("* %s\n  * (%s)\n", issue.Message, createAt.Format("January 2, 2006 at 15:04"))
	}

	return str
}
